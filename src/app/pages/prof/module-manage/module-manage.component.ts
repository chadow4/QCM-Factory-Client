import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleDto} from "../../../models/module.model";
import {ModuleService} from "../../../services/module.service";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-module-manage',
  templateUrl: './module-manage.component.html',
  styleUrls: ['./module-manage.component.scss']
})
export class ModuleManageComponent implements OnInit {

  moduleId!: number;
  module!: ModuleDto;

  constructor(private route: ActivatedRoute,
              private moduleService: ModuleService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.moduleId = Number(params.get('id'));
    });
    this.moduleService.getModuleById(this.moduleId).subscribe({
      next: (res) => {
        this.module = res;
      },
      error: (err) => {
        this.router.navigate(['/dashboard']).then(() => this.alertService.error(err.error.message));
      }
    });

  }
}
