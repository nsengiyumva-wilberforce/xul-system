import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-director-of-studies',
  templateUrl: './director-of-studies.component.html',
  styleUrls: ['./director-of-studies.component.css']
})
export class DirectorOfStudiesComponent implements OnInit {

  Events = [];
    calendarOptions: CalendarOptions;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    setTimeout(() => {
      return this.httpClient.get('http://localhost:8888/event.php')
        .subscribe(res => {
            this.Events.push(res);
            console.log(this.Events);
        });
    }, 2200);

    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events
      };
    }, 2500);
  }

}
