import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

apiUrl = 'http://localhost:3000/teachers';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
// Fetch all teachers from the fake server
getTeachers(): Observable<Teacher[]>{
  return this.http.get<Teacher[]>(this.apiUrl);
}

// Add a teacher
addTeacher(data): Observable<Teacher>{
  return this.http.post<Teacher>(this.apiUrl, JSON.stringify(data), this.httpOptions);
}

  }
