import { NavItem } from './../../../../shared/menu-items/menu-items';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sk-menu-item',
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
  firstExpand: boolean = true;
  @Input() item: NavItem | undefined;
  @Input() depth: number;

  constructor() {
    if (this.depth == undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
  }

  expand(item: NavItem) {
    console.log(item);
    if (item.route !== "" && this.firstExpand) {
      item.children = item.children.map(children => {
        let pastPrefixes = item.prefixes ? item.prefixes : [];
        return {
          ...children,
          prefixes: [...pastPrefixes, unescape(item.route)]
        }
      })
    }
    this.expanded = !this.expanded;
    this.firstExpand = false;
  }

  formatUrl(item: NavItem) {
    if (item.prefixes && item.prefixes.length > 0) {
      return [...item.prefixes, unescape(item.route)].join('/');
    }
    return unescape(item.route);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.item.children && this.item.children.length > 0) {
      this.item.children = this.item.children.map(children => {
        return {
          ...children,
          prefixes: []
        }
      })
    }
  }

}
