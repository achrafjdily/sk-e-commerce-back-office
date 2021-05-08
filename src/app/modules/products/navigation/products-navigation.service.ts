import { PRODUCTS_NAVIGATION } from './products.navigation';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationPageActions } from '../../../ngrx/app-state/actions/navigation';

@Injectable({
  providedIn: 'root'
})
export class ProductsNavigationService {

  constructor(private store: Store) {
    this.store.dispatch(NavigationPageActions.registerNavigation({ navItems: PRODUCTS_NAVIGATION }))
  }

}
