import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import {ResultService} from "../../../services/result.service";
import {ResultDto} from "../../../models/result.model";
import {QuestionDto} from "../../../models/question.model";

@Component({
  selector: 'app-qcm-myresult',
  templateUrl: './qcm-myresult.component.html',
  styleUrls: ['./qcm-myresult.component.scss']
})
export class QcmMyresultComponent implements OnInit {


  myResult?: ResultDto;
  questions: QuestionDto[] = [];
  idQuestionnaire!: number;

  constructor(private router: Router,
              private alertService: AlertService,
              private resultService: ResultService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idQuestionnaire = Number(params['id']);
    });
    this.resultService.getResultForQuestionnaire(this.idQuestionnaire).subscribe({
      next: (res) => {
        this.myResult = res;
        this.questions = this.myResult.questionnaire.questions;
      },
      error: (err) => {
        history.back();
        this.alertService.error(err.error.message);
      }
    });

  }

}
