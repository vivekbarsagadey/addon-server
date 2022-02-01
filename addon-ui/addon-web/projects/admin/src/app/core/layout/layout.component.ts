import { Component, OnInit } from '@angular/core';
import {NavItem} from "addon_web/libs/interfaces/nav-item.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'Dashboard',
      icon: 'settings_overscan',
      link: './dashboard',
      children: [],
      selected: false
    },
    {
      title: 'Users',
      icon: 'supervised_user_circle',
      link: './users',
      children: [],
      selected: false
    },
    {
      title: 'Roles',
      icon: 'https',
      link: './roles',
      children: [],
      selected: false
    },
    {
      title: 'Rules',
      icon: 'gavel',
      link: './rules',
      children: [],
      selected: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
