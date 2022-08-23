import { Injectable, Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Alumno } from '../../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  auth: any;

  constructor(private router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token');
      return token ? true : this.router.navigate(['login']);
      
  }
  
 /*  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('tipo_user');
      if (token === "administrador") {
        return true;
      }else {
        return this.router.navigate(['login']);
      }
    } */

}
