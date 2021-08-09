import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../class-teacher.service';

import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private classTeacherService: ClassTeacherService, private fb: FormBuilder) { }
  studentReg = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    mname: [''],
    gender: ['', Validators.required],
    regno: [''],
    photo: [''],
    phoneNumber: [''],
    subject: this.fb.array([], Validators.required)
  });

  // Subjects array
  Data: Array<any> = [
    { name: 'Physics', value: 'physics' },
    { name: 'Chemistry', value: 'chemistry' },
    { name: 'Biology', value: 'biology' },
    { name: 'Mathematics', value: 'mathematics' },
    { name: 'Histry', value: 'history' },
    { name: 'Economics', value: 'economics' },
    { name: 'Geography', value: 'geography' },
    { name: 'Divinity', value: 'divinity' },
    { name: 'Fine art', value: 'art' },
    { name: 'Literature In English', value: 'literature' }
  ];

  ngOnInit(): void {
  }
  onCheckboxChange(e): any{
  const isArray: FormArray = this.studentReg.get('subject') as FormArray;

  if (e.target.checked) {
      isArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      isArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  // add a student to the database
addStudents(data): void{
this.classTeacherService.addStudent(JSON.stringify(this.studentReg.value))
  .subscribe(() => {
    console.log('everything is submitted');
  });
}
}
