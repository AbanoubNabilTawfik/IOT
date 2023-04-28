import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _url:string="/assets/Data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal Server Error")
    }));
  }

  postEmployee()
  {
    let body={
      "id":10,
      "name":"Abanoub Nabil"
    }
    return this.http.post(this._url,body).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal Server Error")
    }));
  }
}
