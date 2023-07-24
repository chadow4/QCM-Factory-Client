import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { QuestionnaireService } from "../services/questionnaire.service";
import { AlertService } from "../services/alert.service";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class QcmNotFinishedGuard implements CanActivate {

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const qcmId = Number(route.paramMap.get('id'));
    const isProf = this.authService.isProf();

    return this.questionnaireService.getQuestionnaireById(qcmId).pipe(
      map((res) => {
        const moduleId = res.module.id;
        if (!res.isFinished) {
          if(isProf){
            this.router.navigate(['module',moduleId,'manage']).then(() => this.alertService.error("Ce QCM n'est pas encore terminé"));
          }else{
            this.router.navigate(['module',moduleId]).then(() => this.alertService.error("Ce QCM n'est pas encore terminé"));
          }
          return false;
        }
        return true;
      }),
    );
  }
}
