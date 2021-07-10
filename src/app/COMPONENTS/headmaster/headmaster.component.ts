import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/teachers.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Teacher } from 'src/app/teacher';
import { Router } from '@angular/router';


@Component({
  selector: 'app-headmaster',
  templateUrl: './headmaster.component.html',
  styleUrls: ['./headmaster.component.css']
})
export class HeadmasterComponent implements OnInit {

  teachers: Teacher[] = [];


userObj = { sn: 0, fname: '', lname: '', class: '', role: '', salary: '' };


  constructor(private teachersService: TeachersService, private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): any{
    return this.teachersService.getTeachers().subscribe((data) => this.teachers = data);
  }
addTeacher(data): void{
  this.teachersService.addTeacher(this.userObj).subscribe(() => {
window.location.reload();
  });
}
}
