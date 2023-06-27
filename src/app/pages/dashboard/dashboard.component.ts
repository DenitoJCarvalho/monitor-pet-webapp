import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { PageService } from '../../services/page.service';

import { loginModel } from '../../models/loginModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: string = '';
  userName: string = '';
  userEmail: string = '';
  userProfile: string = '';

  menu1: string = "";

  dataUser!: loginModel;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private pageService: PageService

  ) {
    this.activeRoute.params.subscribe({
      next: (res) => {
        return res
      },
      error: (err) => {
        return err
      }
    });
  }

  ngOnInit(): void {
    this.loadDataUser();
  }

  public goToPage(endPoint: string, id?: string): string {
    return `${endPoint}/${id}`
  }

  loadDataUser() {
    let id = this.getUserId();

    this.loginService.getUserId(id).subscribe({
      next: (res) => {
        this.userId = res._id;
        this.userName = res.name;
        this.userEmail = res.email;
        this.userProfile = res.profile;
      }
    })
  }

  getUserId() {
    let id = new Object();
    this.activeRoute.params.subscribe({
      next: (res) => {
        id = Object.values(res)
      }
    });
    return id.toString();
  }


}
