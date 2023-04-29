import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  deptId:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //this.deptId=this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.deptId=params.get('id');
    })
  }

  goNext()
  {
    let nextId= parseInt(this.deptId)+1;
    this.router.navigate(["/department",nextId]);
  }

  goPrev()
  {
    let prevId= parseInt(this.deptId)-1;
    this.router.navigate(["/department",prevId]);
  }

  goToDepartments()
  {
    this.router.navigate(['/departments',{id:this.deptId}]); //optional route parameter
  }

  goToOverview()
  {
    //localhost:4200/department/1/overview
    this.router.navigate(['overview'],{relativeTo:this.activatedRoute});
  }

  goToContact()
  {
    //localhost:4200/department/1/contact
    this.router.navigate(['contact'],{relativeTo:this.activatedRoute});
  }

}
