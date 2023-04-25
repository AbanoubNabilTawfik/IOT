import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  textColor:string="red"
  hasError:boolean=false;

  myStyle={
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
