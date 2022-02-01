export interface NavItem {
  title: string;
  icon: string;
  link: string;
  selected: boolean;
  children: NavItem[];
}
