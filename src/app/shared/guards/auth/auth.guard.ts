import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getIsLoggedIn } from '../../../ngrx/app-state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(getIsLoggedIn).pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

}
