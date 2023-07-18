import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Router} from "@angular/router";
import {ModuleCreateDto} from "../../../models/module.model";
import {ModuleService} from "../../../services/module.service";

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.scss']
})
export class ModuleCreateComponent implements OnInit {
  moduleForm = {name: ''};

  constructor(private moduleService: ModuleService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const module = this.moduleForm as ModuleCreateDto;
    this.moduleService.createModule(module).subscribe({
      next: (res) => {
        this.router.navigate(['dashboard']).then(
          () => this.alertService.success(res.message));
      },
      error: err => this.alertService.error(err.error.message)
    });

  }
}
