import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { JumbotronBottomComponent } from './jumbotron-bottom/jumbotron-bottom.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgbdModalContent } from './modal/ngbd-modal-content';
import { NgbdModalContentDetail } from './modal/ngbd-modal-content-detail';
import { NgbdModalContentEdit } from './modal/ngbd-modal-content-edit';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    NavbarBottomComponent,
    JumbotronComponent,
    JumbotronBottomComponent,
    BreadcrumbComponent,
    NgbdModalContent,
    NgbdModalContentDetail,
    NgbdModalContentEdit,
    MisCursosComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent, NgbdModalContentDetail, NgbdModalContentEdit] 
})
export class AppModule { }
