import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthInterceptor} from "./interceptor/auth-interceptor";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { ProfileComponent } from './pages/student/profile/profile.component';
import { ModuleListComponent } from './pages/student/module-list/module-list.component';
import { QcmComponent } from './pages/student/qcm/qcm.component';
import { DashboardComponent } from './pages/prof/dashboard/dashboard.component';
import { QcmCreateComponent } from './pages/prof/qcm-create/qcm-create.component';
import { QcmResultComponent } from './pages/prof/qcm-result/qcm-result.component';
import { QcmManageComponent } from './pages/prof/qcm-manage/qcm-manage.component';
import { ModuleCreateComponent } from './pages/prof/module-create/module-create.component';
import { ModuleManageComponent } from './pages/prof/module-manage/module-manage.component';
import {ModuleComponent} from './pages/student/module/module.component';
import { QcmMyresultComponent } from './pages/student/qcm-myresult/qcm-myresult.component';
import { SearchComponent } from './shared/search/search.component';
import { SectionAccordionComponent } from './shared/section-accordion/section-accordion.component';
import { SectionCreateComponent } from './pages/prof/section-create/section-create.component';
import { ResourceCreateComponent } from './pages/prof/resource-create/resource-create.component';
import { ResourceComponent } from './pages/student/resource/resource.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    ModuleListComponent,
    QcmComponent,
    DashboardComponent,
    QcmCreateComponent,
    QcmResultComponent,
    QcmManageComponent,
    ModuleCreateComponent,
    ModuleManageComponent,
    ModuleComponent,
    QcmMyresultComponent,
    SearchComponent,
    SectionAccordionComponent,
    SectionCreateComponent,
    ResourceCreateComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CKEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
