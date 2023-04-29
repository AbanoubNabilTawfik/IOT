import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'/employees',pathMatch:'full'},
  {path:'departments',component:DepartmentsComponent},
  {path:'employees',component:EmployeeListComponent},
  {
      path:'department/:id',
      component:DepartmentDetailsComponent,
      children:[
        {path:'overview',component:OverviewComponent},
        {path:'contact',component:ContactComponent}
      ]
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)
  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
