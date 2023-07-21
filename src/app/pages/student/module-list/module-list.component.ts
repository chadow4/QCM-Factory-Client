import {Component, OnInit} from '@angular/core';
import {ModuleDto} from "../../../models/module.model";
import {Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import {ModuleService} from "../../../services/module.service";

@Component({
  selector: 'app-qcm-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  modules!: ModuleDto[];

  constructor(private router: Router,
              private alertService: AlertService,
              private moduleService: ModuleService) {
  }

  ngOnInit(): void {
    this.moduleService.getAllModules().subscribe(res => {
      this.modules = res;
    })
  }


}


