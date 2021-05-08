import { NavItem } from './../../../shared/menu-items/menu-items';

export const PRODUCTS_NAVIGATION: NavItem[] = [
    {
        displayName: 'Products',
        route: "products",
        iconName: "inventory",
        children: [
            {
                displayName: 'List',
                route: "list",
                iconName: "list",
            }
        ]
    }
]