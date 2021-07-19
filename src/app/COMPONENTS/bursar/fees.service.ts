import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

  apiUrl = 'http://localhost:3000/fees';
  apiUrl1 = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Fetch all school-fees records
  fees(): any{
    return this.http.get(this.apiUrl);
  }

  // Fetch all Employees
  getEmployees(): any{
return this.http.get(this.apiUrl1);
  }

  // add an employee
  addEmployee(data): any{
    return this.http.post(this.apiUrl1, data, this.httpOptions);
  }

  // Add a new fees record
  addFees(data): Observable<any>{
    return this.http.post(this.apiUrl, data, this.httpOptions);
  }
}
