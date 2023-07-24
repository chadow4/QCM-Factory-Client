import {Component, OnInit} from '@angular/core';
import {ResultDto} from "../../../models/result.model";
import {AlertService} from "../../../services/alert.service";
import {ResultService} from "../../../services/result.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionDto} from "../../../models/question.model";

@Component({
  selector: 'app-qcm-result',
  templateUrl: './qcm-result.component.html',
  styleUrls: ['./qcm-result.component.scss']
})
export class QcmResultComponent implements OnInit {

  results: ResultDto[] = [];
  idQuestionnaire!: number;

  constructor(private router: Router,
              private resultService: ResultService,
              private alertService: AlertService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idQuestionnaire = Number(params.get('id'));
    });
    this.resultService.getAllResultsForQuestionnaire(this.idQuestionnaire).subscribe( {
      next: (res) => {
        this.results = res;
      },
      error: (err) => {
        this.router.navigate(['/dashboard']).then(() => this.alertService.error(err.error.message));
      }
    });
  }

}
