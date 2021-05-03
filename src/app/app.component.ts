import { initToken } from './ngrx/app-state/actions/auth-page.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthPageActions } from './ngrx/app-state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sk-e-commerce-back-office';

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(AuthPageActions.initToken());
  }
}
