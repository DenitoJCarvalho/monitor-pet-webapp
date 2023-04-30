import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  msg: string[] = [];


  constructor(
    private formBulider: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBulider.group({
      email: [null],
      password: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value.password);
    this.verifyNullPassword(this.form.value.password);
    this.verifySizePassword(this.form.value.password);
    this.form.reset();
  }

  verifyEmail() { }

  verifySizePassword(value: string) {
    if (value.length < 5) {
      this.msg.push('Senha é menor que 4 caracteres.');
    }
    this.clearMsg();
  }

  verifyNullPassword(value: string) {
    if (value === null) {
      this.msg.push('Senha não pode ser nula.');
    }
    this.clearMsg();
  }

  clearMsg() {
    setTimeout(() => {
      this.msg.pop();
    }, 3000)
  }

}
