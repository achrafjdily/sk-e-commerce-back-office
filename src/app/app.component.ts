import { NavigationRegisteringService } from './navigation-registering.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthPageActions } from './ngrx/app-state/actions/auth';

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tw-material-admin-panel';

  constructor(private navigationRegisteringService: NavigationRegisteringService, private store: Store) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(AuthPageActions.initToken());
  }
}
