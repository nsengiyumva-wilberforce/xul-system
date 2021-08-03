import { Component, OnInit } from '@angular/core';
import { ClassTeacherService } from '../class-teacher.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  title = 'CLASS-LIST';
  showProfile = false;
  students: any[] = [];

  constructor(private classTeacherService: ClassTeacherService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }
fetchStudents(): void{
this.classTeacherService.getStudents()
  .subscribe(arg => this.students = arg);
}

}
