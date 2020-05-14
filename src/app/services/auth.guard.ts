import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService){
    
  }
  
  canActivate(
    // next es a la ruta que quiero entrar
    next: ActivatedRouteSnapshot,
    //Retorna un observable de tipo booelano
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  
}
