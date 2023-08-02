import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ProfileComponent} from "./pages/student/profile/profile.component";
import {ModuleListComponent} from "./pages/student/module-list/module-list.component";
import {DashboardComponent} from "./pages/prof/dashboard/dashboard.component";
import {QcmComponent} from "./pages/student/qcm/qcm.component";
import {QcmResultComponent} from "./pages/prof/qcm-result/qcm-result.component";
import {QcmManageComponent} from "./pages/prof/qcm-manage/qcm-manage.component";
import {QcmCreateComponent} from "./pages/prof/qcm-create/qcm-create.component";
import {QcmFinishedGuard} from "./guard/qcmFinished-guard";
import {DisconnectedGuard} from "./guard/disconnected-guard";
import {ModuleCreateComponent} from "./pages/prof/module-create/module-create.component";
import {ModuleComponent} from "./pages/student/module/module.component";
import {ModuleManageComponent} from "./pages/prof/module-manage/module-manage.component";
import {ConnectedGuard} from "./guard/connected-guard";
import {StudentGuard} from "./guard/student-guard";
import {ProfGuard} from "./guard/prof-guard";
import {QcmMyresultComponent} from "./pages/student/qcm-myresult/qcm-myresult.component";
import {QcmNotFinishedGuard} from "./guard/qcmNotFinished-guard";
import {SectionCreateComponent} from "./pages/prof/section-create/section-create.component";
import {ResourceCreateComponent} from "./pages/prof/resource-create/resource-create.component";
import {ResourceComponent} from "./pages/student/resource/resource.component";
import {QcmNotStarted} from "./guard/qcmNotStarted";
import {QcmAlreadyResponded} from "./guard/qcmAlreadyResponded";

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
    component: LoginComponent,
    canActivate: [DisconnectedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [DisconnectedGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'module/list',
    component: ModuleListComponent,
    canActivate: [ConnectedGuard, StudentGuard]
  },
  {
    path: 'module/create',
    component: ModuleCreateComponent,
    canActivate: [ConnectedGuard, ProfGuard]
  },
  {
    path: 'module/:id',
    component: ModuleComponent,
    canActivate: [ConnectedGuard, StudentGuard]
  },
  {
    path: 'module/:id/manage', // a revoir
    component: ModuleManageComponent,
    canActivate: [ConnectedGuard, ProfGuard]
  },
  {
    path: 'section/:moduleId/create',
    component: SectionCreateComponent,
    canActivate: [ConnectedGuard, ProfGuard]
  },
  {
    path: 'resource/:sectionId/create',
    component: ResourceCreateComponent,
    canActivate: [ConnectedGuard, ProfGuard]
  },
  {
    path: 'resource/:id', // a revoir
    component: ResourceComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'qcm/:moduleId/create',
    component: QcmCreateComponent,
    canActivate: [ConnectedGuard, ProfGuard]
  },
  {
    path: 'qcm/:id', // a revoir
    component: QcmComponent,
    canActivate: [QcmFinishedGuard, QcmNotStarted, QcmAlreadyResponded, ConnectedGuard, StudentGuard]
  },
  {
    path: 'qcm/:id/results', // a revoir
    component: QcmResultComponent,
    canActivate: [QcmNotFinishedGuard, ConnectedGuard, ProfGuard]
  },
  {
    path: 'qcm/:id/myresult', // a check
    component: QcmMyresultComponent,
    canActivate: [QcmNotFinishedGuard, ConnectedGuard, StudentGuard]
  },
  {
    path: 'qcm/:id/manage', // a revoir
    component: QcmManageComponent,
    canActivate: [QcmFinishedGuard, ConnectedGuard, ProfGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ConnectedGuard, ProfGuard]
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
