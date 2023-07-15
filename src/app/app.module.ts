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
import { QcmListComponent } from './pages/student/qcm-list/qcm-list.component';
import { QcmComponent } from './pages/student/qcm/qcm.component';
import { DashboardComponent } from './pages/prof/dashboard/dashboard.component';
import { QcmCreateComponent } from './pages/prof/qcm-create/qcm-create.component';
import { QcmResultComponent } from './pages/prof/qcm-result/qcm-result.component';
import { QcmManageComponent } from './pages/prof/qcm-manage/qcm-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    QcmListComponent,
    QcmComponent,
    DashboardComponent,
    QcmCreateComponent,
    QcmResultComponent,
    QcmManageComponent
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
