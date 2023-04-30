import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;


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
    console.log(this.form.value);
  }

}
