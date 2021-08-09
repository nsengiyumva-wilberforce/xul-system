import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../class-teacher.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  title = 'MARKS FOR STUDENTS';
  students: any[] = [];
  editCourse?: any;
  editStudent?: any;

  // Subjects array
  courses: Array<any> = [
    { name: 'PHY', value: 'physics' },
    { name: 'CHEM', value: 'chemistry' },
    { name: 'BIO', value: 'biology' },
    { name: 'MATHS', value: 'mathematics' },
    { name: 'HIST', value: 'history' },
    { name: 'ECON', value: 'economics' },
    { name: 'GEO', value: 'geography' },
    { name: 'DIV', value: 'divinity' },
    { name: 'ART', value: 'art' },
    { name: 'LIT', value: 'literature' }
  ];

  constructor(private classTeacherService: ClassTeacherService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void{
    this.classTeacherService.getStudents()
      .subscribe(arg => this.students = arg);
    }
    edit(course: any, student: any): void{
      this.editCourse = course;
      this.editStudent = student;
    }
    update(): void{
     console.log('working right!!!');
    }
}
