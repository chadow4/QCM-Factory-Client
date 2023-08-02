import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {QuestionnaireService} from "../services/questionnaire.service";
import {AlertService} from "../services/alert.service";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class QcmNotStarted implements CanActivate {

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
        if (!res.isOpen) {
          const moduleId = res.module.id;
          if(isProf){
            this.router.navigate(['module',moduleId,'manage']).then(() => this.alertService.error("Ce QCM n'a pas encore commencé"));
          }else{
            this.router.navigate(['module',moduleId]).then(() => this.alertService.error("Ce QCM n'a pas encore commencé"));
          }
          return false;
        }
        return true;
      }),
    );
  }
}
