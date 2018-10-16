
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

     canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            console.log("entrou");
          if (localStorage['token'] == null) {
             this.router.navigate(['login']);
             return false;
          }

          return true;

    }
}
