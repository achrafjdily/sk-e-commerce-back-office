import { ProductsNavigationService } from './modules/products/navigation/products-navigation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationRegisteringService {

  constructor(
    private productsNavigationService: ProductsNavigationService,
  ) {

  }
}
