import { getUser } from './../../ngrx/app-state/selectors/auth.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../ngrx/app-state/models/user.model';
import { NavItem } from '../../shared/menu-items/menu-items';
import { getNavigation } from '../../ngrx/app-state/selectors/navigation.selectors';
import * as _ from 'lodash';
import { AuthPageActions } from '../../ngrx/app-state/actions/auth';

@Component({
  selector: 'sk-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  user$: Observable<User>;
  navItems: NavItem[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.select(getUser);
    this.store.select(getNavigation).subscribe(
      navigation => this.navItems = _.cloneDeep(navigation)
    );
  }

  logout(){
    this.store.dispatch(AuthPageActions.logout());
  }

}
