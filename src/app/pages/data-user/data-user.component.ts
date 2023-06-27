import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { PageService } from '../../services/page.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {

  userId: string = '';
  userName: string = '';
  userProfile: string = '';
  link1: string = '';


  constructor(
    private route: ActivatedRoute,
    private LoginService: LoginService,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getUserDataById();
    this.link1 = this.pageService.goToPage(`userData`, this.getUserId());
  }

  getUserDataById() {
    return this.LoginService.getUserId(this.userId).subscribe({
      next: (res) => {
        this.userName = res.name;
        this.userProfile = res.profile
      }
    });
  }

  getUserId() {
    this.route.params.subscribe({
      next: (res) => {
        this.userId = Object.values(res).toString()
      }
    });

    return this.userId;
  }

}
