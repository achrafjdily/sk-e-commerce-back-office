import { map, tap } from 'rxjs/operators';
import { getIsLoggedIn } from './../../../ngrx/app-state/selectors/auth.selectors';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(getIsLoggedIn).pipe(
      map(isLoggedIn => !isLoggedIn),
      tap(isNotLoggedIn => {
        if (!isNotLoggedIn) {
          this.router.navigateByUrl('/');
        }
      })
    )
  }

}
