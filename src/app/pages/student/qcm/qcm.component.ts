import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnaireService} from "../../../services/questionnaire.service";
import {QuestionDto} from "../../../models/question.model";
import {ResultService} from "../../../services/result.service";
import {ResultCreateDto} from "../../../models/result.model";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})
export class QcmComponent implements OnInit {

  minutes = 0;
  seconds = 0;
  intervalId: any;

  questions: QuestionDto[] = [];

  qcmId!: number;
  moduleId!: number;

  totalQuestions: number = 0;

  myResponses: string[] = [];

  currentQuestionIndex: number = 0;

  isFinished: boolean = false;

  gameStarted: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService,
              private resultService: ResultService,
              private alertService: AlertService) {
  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    if (!this.isFinished) {
      this.onQuit();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.qcmId = params['id'];
      this.questionnaireService.getQuestionnaireById(this.qcmId).subscribe((questionnaire) => {
        const {questions, module, time} = questionnaire || {};
        if (questions) {
          this.questions = questions;
          this.minutes = time;
          this.moduleId = module!.id;
          this.totalQuestions = this.questions.length;

          this.handleLocalStorage();
        }

      });
    });

  }

  private handleLocalStorage() {
    const storedCurrentQuestion = localStorage.getItem('currentQuestion');
    const storedMyResponses = localStorage.getItem('myResponses');
    const savedTime = localStorage.getItem('counterTime');
    const gameStarted = localStorage.getItem('gameStarted');

    if (storedCurrentQuestion && storedMyResponses && savedTime && gameStarted) {
      this.currentQuestionIndex = parseInt(storedCurrentQuestion);
      this.myResponses = JSON.parse(storedMyResponses);
      const time = JSON.parse(savedTime);
      this.minutes = time.minutes;
      this.seconds = time.seconds;
      this.startTimer();
      this.gameStarted = true;
    } else {
      this.initializeMyResponses();
    }

  }

  public startGame() {
    this.clearLocalStorage();
    this.gameStarted = true;
    localStorage.setItem('gameStarted', String(this.gameStarted.toString()));
    this.startTimer();
  }

  public goToNext() {
    if (this.currentQuestionIndex + 1 == this.questions.length) {
      this.gameStarted = false;
      this.isFinished = true;
      this.clearLocalStorage();
    } else {
      this.currentQuestionIndex++;
    }
  }

  public goToPrevious() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  public goToQuestion(nb: number) {
    this.currentQuestionIndex = nb;
  }

  private startTimer() {
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.intervalId);
          this.isFinished = true;
          this.clearLocalStorage();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  private onQuit() {
    const time = {minutes: this.minutes, seconds: this.seconds};
    localStorage.setItem('counterTime', JSON.stringify(time));
    localStorage.setItem('currentQuestion', this.currentQuestionIndex.toString());
    localStorage.setItem('myResponses', JSON.stringify(this.myResponses));
  }

  private clearLocalStorage() {
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('myResponses');
    localStorage.removeItem('gameStarted');
    localStorage.removeItem('counterTime');
  }

  private initializeMyResponses() {
    for (let i = 0; i < this.totalQuestions; i++) {
      this.myResponses.push("");
    }
  }

  public sendResult() {

    const result: ResultCreateDto = {
      responses: this.myResponses,
      questionnaireId: this.qcmId
    };
    this.resultService.createResult(result).subscribe((result) => {
      this.router.navigate(['/module', this.moduleId]).then(() => this.alertService.success("Votre résultat a été enregistré avec succès !"));
    });
  }
}
