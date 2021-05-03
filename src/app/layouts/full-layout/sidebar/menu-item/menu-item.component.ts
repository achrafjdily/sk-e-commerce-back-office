import { NavItem } from './../../../../shared/menu-items/menu-items';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  expanded: boolean | undefined;
  @Input() item: NavItem | undefined;
  @Input() depth: number;

  constructor() {
    if (this.depth == undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
  }

  onItemSelected(item: NavItem) {

    if (!item.children || !item.children.length) {
      // this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  
  unescape(x: string) {
    return unescape(x);
  }

}
