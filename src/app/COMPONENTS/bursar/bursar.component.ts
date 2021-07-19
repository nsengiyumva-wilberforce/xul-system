import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bursar',
  templateUrl: './bursar.component.html',
  styleUrls: ['./bursar.component.css']
})
export class BursarComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [15339, 21345, 18483, 24003, 23489, 24092, 12034], label: 'Series A' },
  ];

  public lineChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    public lineChartColors: Color[] = [
    {
      backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: 'black'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  message: string;
  constructor(public authService: AuthService, public router: Router) { }
  ngOnInit(): void {
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  }


