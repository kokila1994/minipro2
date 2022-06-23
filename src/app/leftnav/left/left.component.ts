import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  x:any = 2;
  y:any = 2;
  z:any = this.x + this.y;
  a:any = 4;
  b:any = 2;
  c:any = this.a-this.b;
  d:any = 3;
  e:any = 4;
  f:any = this.d*this.e;
  g:any = 10;
  h:any = 2;
  i:any = this.g/this.h
  constructor(private sharedServices: SharedService) { }

  ngOnInit(): void {
    this.sharedServices.sendMessage(this.z);
    this.sharedServices.subSendMessage(this.c);
    this.sharedServices.mulSendMessage(this.f);
    this.sharedServices.divSendMessege(this.i);
  }

}
