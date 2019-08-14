import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppareilViewComponent} from './components/appareil-view/appareil-view.component';
import {AuthComponent} from './components/auth/auth.component';
import {SingleAppareilComponent} from './components/single-appareil/single-appareil.component';
import {FourOfFourComponent} from './components/four-of-four/four-of-four.component';
import {AuthGuard} from './services/auth-guard.service';
import {EditAppareilComponent} from './components/edit-appareil/edit-appareil.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {NewUserComponent} from './components/new-user/new-user.component';


const routes: Routes = [

  {path : 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path : 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path : 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},

  {path : 'auth', component: AuthComponent},
  {path: 'users', component: UserListComponent },
  {path: 'new-user', component: NewUserComponent },


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
