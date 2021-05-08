export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  prefixes?: string[],
  children?: NavItem[];
}
