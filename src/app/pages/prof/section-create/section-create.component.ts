import {Component, OnInit} from '@angular/core';
import {SectionService} from "../../../services/section.service";
import {AlertService} from "../../../services/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SectionCreateDto} from "../../../models/section.model";

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss']
})
export class SectionCreateComponent implements OnInit {

  sectionForm = {name: '', moduleId: 0};

  moduleId!: number;

  constructor(private sectionService: SectionService,
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
    this.sectionForm.moduleId = this.moduleId;
    console.log(this.sectionForm);
    const section = this.sectionForm as SectionCreateDto;
    this.sectionService.createSection(section).subscribe({
      next: (res: any) => {
        this.router.navigate(['module', this.moduleId, 'manage']).then(
          () => this.alertService.success(res.message));
      },
      error: (err: any) => {
        this.router.navigate(['/dashboard']).then(() => this.alertService.error(err.error.message));
      }
    });
  }


}
