import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  selectedId:any;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Node JS"},
    {"id":4,"name":"JavaScript"},
    {"id":5,"name":"ES6"},

  ]
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get('id');
    })
  }

  goToDepartmentDetails(deptId:any)
  {
    //navigate to department details page and pass the id
    this.router.navigate(["/department",deptId]);
  }

}
