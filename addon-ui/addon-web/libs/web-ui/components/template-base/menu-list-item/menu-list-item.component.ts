import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavItem} from "addon_web/libs/interfaces/nav-item.model";

@Component({
  selector: 'lib-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean = true;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  //@ts-ignore
  @Input() item: NavItem = {};
  //@ts-ignore
  @Input() selectLabelSubject;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.selectLabelSubject?.subscribe((label: string) => {
      this.item.selected = this.item.title === label;
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.link]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
