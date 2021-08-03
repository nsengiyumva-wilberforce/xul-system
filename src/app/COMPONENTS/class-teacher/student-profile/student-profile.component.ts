import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassTeacherService } from '../class-teacher.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
student: any;
  constructor(private route: ActivatedRoute, private classTeacherService: ClassTeacherService) { }

  ngOnInit(): void {
    this.getStudent();
  }
getStudent(): void{
const id = Number(this.route.snapshot.paramMap.get('id'));
this.classTeacherService.getStudent(id)
  .subscribe(arg => this.student = arg);

}
}
