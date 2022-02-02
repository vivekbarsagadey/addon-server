import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavItem} from "addon_web/libs/interfaces/nav-item.model";
import {Subject} from "rxjs";
import {Apps} from "addon_web/libs/enums/apps";

@Component({
  selector: 'app-template-base',
  templateUrl: './template-base.component.html',
  styleUrls: ['./template-base.component.scss']
})
export class TemplateBaseComponent implements OnInit, OnChanges {
  @Input() navItems: NavItem[] = [];
  @Input() app = Apps.Admin;
  title = 'Admin';
  isMenuOpen = true;
  copyright = '© Whiz It Ltd. 2022 copyright';
  displaySidebar = true;
  selectLabelSubject = new Subject<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['app']?.currentValue) {
      switch (changes['app']?.currentValue) {
        case Apps.Provider:
          this.title = 'Provider';
          break;
        case Apps.Consumer:
          this.title = 'Consumer';
      }
    }
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.copyright = this.copyright === '© Whiz It Ltd. 2022 copyright' ? '© Whiz It' : '© Whiz It Ltd. 2022 copyright';
  }

  changeSelection(label: string) {
    this.selectLabelSubject.next(label);
  }
}
