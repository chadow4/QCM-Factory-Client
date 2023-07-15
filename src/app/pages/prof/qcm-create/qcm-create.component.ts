import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Router} from "@angular/router";
import {QuestionnaireCreateDto} from "../../../models/questionnaire.model";
import {QuestionnaireService} from "../../../services/questionnaire.service";

@Component({
  selector: 'app-qcm-create',
  templateUrl: './qcm-create.component.html',
  styleUrls: ['./qcm-create.component.scss']
})
export class QcmCreateComponent implements OnInit {
  qcmForm = {name: '', time: 0};

  constructor(private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const qcm = this.qcmForm as QuestionnaireCreateDto;
    this.questionnaireService.createQuestionnaire(qcm).subscribe({
      next: (res) => {
        this.router.navigate(['dashboard']).then(
          () => this.alertService.success(res.message));
      },
      error: err => this.alertService.error(err.error.message)
    });

  }
}
