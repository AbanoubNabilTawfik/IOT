import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics=["Angular","React","Vue"];
  userModel= new User("","","","");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //call serveice
    console.log(this.userModel);
  }

}
