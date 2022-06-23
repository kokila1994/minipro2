import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})
export class MainbodyComponent implements OnInit {
  displayvalues:any;
  subvalues:any;
  mulvalues:any;
  divvalues:any
  @Input() message:any;
  @Output() messageEvent = new EventEmitter<any>();
  data:any = "This Message passing from mainbody to login form Component";
  constructor(private sharedServices:SharedService) { }

  ngOnInit(): void {
    this.displayvalues =this.sharedServices.receiveMessage();
    this.subvalues =this.sharedServices.receiveSubMessage();
    this.mulvalues = this.sharedServices.receiveMulMessage();
    this.divvalues = this.sharedServices.receiveDivMessage();
  }
  sendMessage(){
    this.messageEvent.emit(this.data);
  }
}
