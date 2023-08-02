import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";
import {AlertService} from "../../../services/alert.service";
import * as Editor from "ckeditor5-custom-build/build/ckeditor";

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.scss']
})
export class ResourceCreateComponent implements OnInit {

  public Editor: any = Editor;

  ressourceForm = {name: '', content: '', sectionId: 0};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private resourceService: ResourceService,
              private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ressourceForm.sectionId = Number(params.get('sectionId'));
    });
  }

  onSubmit() {
    console.log(this.ressourceForm);
    this.resourceService.createResource(this.ressourceForm).subscribe({
      next: (res: any) => {
        history.back();
        this.alertService.success(res.message);
      },
      error: (err: any) => {
        this.router.navigate(['/dashboard']).then(() => this.alertService.error(err.error.message));
      }
    });
  }
}
