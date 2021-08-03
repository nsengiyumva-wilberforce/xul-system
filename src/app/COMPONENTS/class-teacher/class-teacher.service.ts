import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassTeacherService {
apiUrl = 'http://localhost:3000/students';

httpOptions = {
  headers: new HttpHeaders({'content-type': 'Application/json'})
};
  constructor(private http: HttpClient) { }

  // Add an expenditure
addStudent(data): any{
  return this.http.post(this.apiUrl, data, this.httpOptions);
}
// retrieve students
getStudents(): any{
  return this.http.get(this.apiUrl);
}
// retrieve a student
getStudent(id: number): any{
  return this.http.get(this.apiUrl + '/' + id);
}
}
