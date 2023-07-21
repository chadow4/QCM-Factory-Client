import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleService} from "../../../services/module.service";
import {AlertService} from "../../../services/alert.service";
import {ModuleDto} from "../../../models/module.model";

@Component({
  selector: 'app-modulel',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  module!: ModuleDto;
  moduleId!: number;

  constructor(private router: Router,
              private alertService: AlertService,
              private moduleService: ModuleService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = Number(params['id']);
    });
    this.moduleService.getModuleById(this.moduleId).subscribe({
      next: (res) => {
        this.module = res;
      },
      error: (err) => {
        this.router.navigate(['/module/list']).then(() => this.alertService.error(err.error.message));
      }
    });
  }

}
