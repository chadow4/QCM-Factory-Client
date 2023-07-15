import {Component, OnInit} from '@angular/core';
import {QuestionnaireService} from "../../../services/questionnaire.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnaireDto} from "../../../models/questionnaire.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionCreateDto} from "../../../models/question.model";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-qcm-manage',
  templateUrl: './qcm-manage.component.html',
  styleUrls: ['./qcm-manage.component.scss']
})
export class QcmManageComponent implements OnInit {

  qcmId!: number;
  qcm!: QuestionnaireDto;
  questionForm!: FormGroup;
  addQuestion = false;

  constructor(private questionnaireService: QuestionnaireService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertService: AlertService,
              private router: Router) {
    this.questionForm = this.formBuilder.group({
      questionText: ['', Validators.required],
      correctOption: ['', Validators.required],
      options: this.formBuilder.array([], Validators.required),
      questionnaireId: 0
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.qcmId = Number(params.get('id'));
    });
    this.questionnaireService.getQuestionnaireById(this.qcmId).subscribe(res => {
      this.qcm = res;
    });

  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this.formBuilder.control('', Validators.required));
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  onSubmit() {
    this.questionForm.get('questionnaireId')?.setValue(this.qcmId);
    if (this.questionForm.valid) {
      const question = this.questionForm.value as QuestionCreateDto;
      this.questionnaireService.createQuestion(question).subscribe({
        next: (res) => {
          this.alertService.success(res.message);
          this.addQuestion = false;
          this.ngOnInit();
        },
        error: err => this.alertService.error(err.error.message)
      });
    }
  }

  changeState() {
    this.questionnaireService.changeState(this.qcmId).subscribe({
      next: (res) => {
        this.alertService.success(res.message);
        if (!this.qcm.isOpen) {
          this.ngOnInit();
        } else {
          this.router.navigate(['dashboard']);
        }
      },
      error: err => this.alertService.error(err.error.message)
    });
  }
}
