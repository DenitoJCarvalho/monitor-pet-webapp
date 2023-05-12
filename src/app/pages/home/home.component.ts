import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { loginModel } from '../../models/loginModel';

import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  form!: FormGroup;
  error: string = '';
  user!: loginModel;
  logon: boolean = false;


  constructor(
    private formBulider: FormBuilder,
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBulider.group({
      email: [null],
      password: [null]
    });

    this.logon;
  }

  onSubmit() {
    let email = this.form.value.email;
    let password = this.form.value.password;
    this.service.getUser(email).subscribe({
      next: (res) => {
        let userId = res.user[0]._id;
        let userEmail = res.user[0].email;
        let userPassword = res.user[0].password;

        if (userEmail === email && userPassword === password) {
          this.goToPage(userId);
          this.logon = true;
        }
      },
      error: (err) => {
        throw err;
      }
    });
  }

  private goToPage(id: string) {
    return this.router.navigate([`dashboard/${id}`])
  }

}
