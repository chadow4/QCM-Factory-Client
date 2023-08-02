import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import {ResourceService} from "../../../services/resource.service";
import {ResourceDto} from "../../../models/resource.model";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  resource?: ResourceDto;
  resourceId!: number;
  @ViewChild('renderedHtml', {static: true}) renderedHtml!: ElementRef;


  constructor(private router: Router,
              private alertService: AlertService,
              private resourceService: ResourceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.resourceId = Number(params.get('id'));
    });
    this.resourceService.getResourceById(this.resourceId).subscribe({
      next: (res: ResourceDto) => {
        this.resource = res;
        this.renderedHtml.nativeElement.innerHTML = this.resource.content;
      },
      error: (err: any) => {
        history.back();
        this.alertService.error(err.error.message);
      }
    });
  }


}
