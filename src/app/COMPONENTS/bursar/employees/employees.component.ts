import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FeesService } from '../fees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = [];
  employeesObj = {
    name: '',
    role: '',
    class: '',
    salary: ''
  };
  constructor(public authService: AuthService, public router: Router, private feesService: FeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  // Get all the employees
  getEmployees(): any{
    this.feesService.getEmployees().subscribe(data => this.employees = data);
  }

  // submit a new Employee
  addEmployee(data): any{
    this.feesService.addEmployee(this.employeesObj).subscribe(() => {
      window.location.reload();
    });
  }
    logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
