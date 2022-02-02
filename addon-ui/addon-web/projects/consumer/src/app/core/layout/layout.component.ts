import { Component, OnInit } from '@angular/core';
import {NavItem} from "addon_web/libs/interfaces/nav-item.model";
//@ts-ignore
import {Apps} from "addon_web/libs/enums/apps";

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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  get apps() {
    return Apps;
  }
}
