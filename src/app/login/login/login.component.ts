import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showMessage:any;
  r_data:any;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:any){
    console.log(form)
    this.showMessage = form;
  }
  receivedata(event:any){
    this.r_data = event;
  }
}
