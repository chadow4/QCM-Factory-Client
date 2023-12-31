import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnaireCreateDto} from "../../../models/questionnaire.model";
import {QuestionnaireService} from "../../../services/questionnaire.service";

@Component({
  selector: 'app-qcm-create',
  templateUrl: './qcm-create.component.html',
  styleUrls: ['./qcm-create.component.scss']
})
export class QcmCreateComponent implements OnInit {
  qcmForm = {name: '', time: 0, moduleId: 0};
  moduleId!: number;
  constructor(private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.moduleId = Number(params.get('moduleId'));
    });
  }

  onSubmit() {
    this.qcmForm.moduleId = this.moduleId;
    console.log(this.qcmForm);
    const qcm = this.qcmForm as QuestionnaireCreateDto;
    this.questionnaireService.createQuestionnaire(qcm).subscribe({
      next: (res) => {
        this.router.navigate(['module',this.moduleId,'manage']).then(
          () => this.alertService.success(res.message));
      },
      error: (err) =>{
        this.router.navigate(['/dashboard']).then(() => this.alertService.error(err.error.message));
      }
    });

  }
}
