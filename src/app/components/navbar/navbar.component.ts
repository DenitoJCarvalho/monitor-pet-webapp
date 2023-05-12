import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() id: string = '00';
  @Input() name: string = 'Novo Usuário';
  @Input() profile: string = '';
  @Input() linkMenu1: string = '';
  @Input() linkMenu2: string = '';
  @Input() linkMenu3: string = '';

  isMenulist: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
    this.isMenulist;
    this.id;
    this.name;
    this.profile;
    this.linkMenu1;
    this.linkMenu2;
    this.linkMenu3;

  }

  toogleMenulist() {
    if (this.isMenulist === false) {
      this.isMenulist = true;
    } else {
      this.isMenulist = false;
    }
  }
}
