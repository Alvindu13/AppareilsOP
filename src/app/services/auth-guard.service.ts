import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthServiceService} from './auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private  authService: AuthServiceService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }

  }
}

