import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppareilViewComponent} from './components/appareil-view/appareil-view.component';
import {AuthComponent} from './components/auth/auth.component';
import {SingleAppareilComponent} from './components/single-appareil/single-appareil.component';
import {FourOfFourComponent} from './components/four-of-four/four-of-four.component';


const routes: Routes = [
  {path : 'appareils', component: AppareilViewComponent},
  {path : 'appareils/:id', component: SingleAppareilComponent},
  {path : 'auth', component: AuthComponent},
  {path : '', component: AppareilViewComponent},
  {path : 'not-found', component: FourOfFourComponent},
  //important de mettre à la fin cette redirection
  {path : '**', redirectTo: '/not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
