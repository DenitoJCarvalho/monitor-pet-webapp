import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu1?: string = '';
  @Input() menu2?: string = '';

  constructor() { }

  ngOnInit(): void { }
}
