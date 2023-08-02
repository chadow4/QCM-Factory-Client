import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AlertService} from "../services/alert.service";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {ResultDto} from "../models/result.model";

@Injectable({
  providedIn: 'root'
})
export class QcmAlreadyResponded implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private authService: AuthService
  ) {
  }

  myResults?: ResultDto[];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const qcmId = Number(route.paramMap.get('id'));
    const isProf = this.authService.isProf();
    return this.userService.getMyInfo().pipe(
      map((res) => {
        this.myResults = res.myResults;
        if (this.isResponded(qcmId)) {
          this.alertService.error("Vous avez déjà répondu à ce QCM")
          history.back()
          return false;
        }
        return true;
      }),
    );
  }

  public isResponded(id: number): boolean {
    return <boolean>this.myResults?.some(result => result.questionnaire.id === id);
  }
}
