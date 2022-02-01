import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lib-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public router: Router) { }

  logOut() {
    this.router.navigateByUrl('auth');
  }

  ngOnInit(): void {
  }

}
