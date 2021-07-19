import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FeesService } from '../fees.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  fees = [];
  feesObj = {
    regno: '',
    name: '',
    class: '',
    fees: '',
  };
  constructor(public authService: AuthService, public router: Router, private feesService: FeesService) { }

  ngOnInit(): void {
   this.getFees();
  }
  // Get the whole fees structure
  getFees(): any{
this.feesService.fees().subscribe(arg => this.fees = arg);
  }
  // Add fees
  addFees(data): any{
    this.feesService.addFees(this.feesObj).subscribe((res: {}) => {
      window.location.reload();
    });
  }
// Sign Out
  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
