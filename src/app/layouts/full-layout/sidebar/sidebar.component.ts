import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/shared/menu-items/menu-items';
import * as _ from 'lodash';

@Component({
  selector: 'sk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() navItems: NavItem[];


  constructor() { }

  ngOnInit(): void {
  }


}
