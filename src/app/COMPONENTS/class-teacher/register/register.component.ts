import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../class-teacher.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentObj = {
    fname: '',
    lname: '',
    mname: '',
    gender: '',
    regno: '',
    photo: '',
    subject: '',
    phoneNumber: ''
  };

  constructor(private classTeacherService: ClassTeacherService) { }

  ngOnInit(): void {
  }
addStudents(data): void{
this.classTeacherService.addStudent(this.studentObj)
  .subscribe(() => {
    console.log('everything is submitted');
  });

}
}
