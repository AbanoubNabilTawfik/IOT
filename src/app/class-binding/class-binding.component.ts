import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  textColor:string="text-danger";
  hasError:boolean=true;
  hasSpecial:boolean=true;

  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.hasSpecial,
    "text-primary":!this.hasSpecial,
    "bg-dark":true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
