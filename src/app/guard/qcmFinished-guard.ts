import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { QuestionnaireService } from "../services/questionnaire.service";
import { AlertService } from "../services/alert.service";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QcmFinishedGuard implements CanActivate {

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private alertService: AlertService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const qcmId = Number(route.paramMap.get('id'));

    return this.questionnaireService.getQuestionnaireById(qcmId).pipe(
      map((res) => {
        if (res.isFinished) {
          this.router.navigate(['dashboard']).then(() => this.alertService.error("Ce QCM est déjà terminé"));
          return false;
        }
        return true;
      }),
    );
  }
}
