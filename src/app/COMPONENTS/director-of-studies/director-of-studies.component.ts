import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-director-of-studies',
  templateUrl: './director-of-studies.component.html',
  styleUrls: ['./director-of-studies.component.css']
})
export class DirectorOfStudiesComponent implements OnInit {

  constructor() { }

  newEvent = new FormGroup({
    event: new FormControl(''),
    date: new FormControl(''),
  });

      calendarOptions: CalendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this),
          events: [
            { title: 'EVENT1', date: '2021-08-09' }
            // {event: 'Going to see bae', date: '2021-07-12'},
            // { event: String(JSON.parse(localStorage.getItem('data')).event), date: String(JSON.parse(localStorage.getItem('data')).date)}
          ]
        };

        addEvent(): void{
localStorage.setItem('data', JSON.stringify(this.newEvent.value));
        }
  // tslint:disable-next-line:typedef
  ngOnInit(){
        }

        handleDateClick(arg): void {
          alert('date click! ' + arg.dateStr);
        }
}
