import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  message:string="";

  ngOnInit(): void {
  }

  showMessage(event:any)
  {
    console.log("Hello from typescript class");
    console.log(event);
    this.message="Hello from typescript class";
  }

  printMessage(message:any)
  {
    console.log(message)
  }

}
