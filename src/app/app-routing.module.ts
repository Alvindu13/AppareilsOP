import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppareilViewComponent} from './components/appareil-view/appareil-view.component';
import {AuthComponent} from './components/auth/auth.component';


const routes: Routes = [
  {path : 'appareils', component: AppareilViewComponent},
  {path : 'auth', component: AuthComponent},
  {path : '', component: AppareilViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
