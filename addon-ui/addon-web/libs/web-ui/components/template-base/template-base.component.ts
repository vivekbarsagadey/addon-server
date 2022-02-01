import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from "addon_web/libs/interfaces/nav-item.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-template-base',
  templateUrl: './template-base.component.html',
  styleUrls: ['./template-base.component.scss']
})
export class TemplateBaseComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  isMenuOpen = true;
  copyright = '© Whiz It Ltd. 2022 copyright';
  displaySidebar = true;
  selectLabelSubject = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.copyright = this.copyright === '© Whiz It Ltd. 2022 copyright' ? '© Whiz It' : '© Whiz It Ltd. 2022 copyright';
  }

  changeSelection(label: string) {
    this.selectLabelSubject.next(label);
  }
}
