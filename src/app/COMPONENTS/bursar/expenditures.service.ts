import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExpendituresService {
apiUrl = 'http://localhost:3000/expenditure';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json'})
  };
  // fetch all the expenditure records
getExpenditures(): any{
  return this.http.get(this.apiUrl);
}

// Add an expenditure
addExpenditure(data): any{
  return this.http.post(this.apiUrl, data, this.httpOptions);
}

// Delete an item
deleteExpenditure(id): any{
  return this.http.delete(this.apiUrl + '/' + id, this.httpOptions);
}
}
