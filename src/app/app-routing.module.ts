import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ProfileComponent} from "./pages/student/profile/profile.component";
import {QcmListComponent} from "./pages/student/qcm-list/qcm-list.component";
import {DashboardComponent} from "./pages/prof/dashboard/dashboard.component";
import {QcmComponent} from "./pages/student/qcm/qcm.component";
import {QcmResultComponent} from "./pages/prof/qcm-result/qcm-result.component";
import {QcmManageComponent} from "./pages/prof/qcm-manage/qcm-manage.component";
import {QcmCreateComponent} from "./pages/prof/qcm-create/qcm-create.component";
import {QcmFinishedGuard} from "./guard/qcmFinishedGuard-guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'qcm/list',
    component: QcmListComponent
  },
  {
    path: 'qcm/create',
    component: QcmCreateComponent
  },
  {
    path: 'qcm/:id',
    component: QcmComponent
  },
  {
    path: 'qcm/:id/results',
    component: QcmResultComponent
  },
  {
    path: 'qcm/:id/manage',
    component: QcmManageComponent,
    canActivate: [QcmFinishedGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
