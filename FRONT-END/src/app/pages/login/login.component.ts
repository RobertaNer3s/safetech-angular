import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LOGINComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  formulario(){
    console.log(this.email)
    console.log(this.password)
  }
}
