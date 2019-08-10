import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppareilComponent } from './components/appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilSvcService} from './services/appareil-svc.service';
import {AuthServiceService} from './services/auth-service.service';
import { AuthComponent } from './components/auth/auth.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    AppareilSvcService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
