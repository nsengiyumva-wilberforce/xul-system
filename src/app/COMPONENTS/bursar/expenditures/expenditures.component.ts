import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ExpendituresService } from '../expenditures.service';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.css']
})
export class ExpendituresComponent implements OnInit {

expenditures = [];
expenditureObj = {
  item: '',
  quantity: '',
  price: '',
};

  constructor( public authService: AuthService, public router: Router,
               private expendituresService: ExpendituresService ) { }

  ngOnInit(): void {
    this.fetchItems();
  }
  // Get all the items
  fetchItems(): any{
    this.expendituresService.getExpenditures().subscribe(data => this.expenditures = data);
  }

  // Add an expenditure
  addExpenditure(data): any{
    this.expendituresService.addExpenditure(this.expenditureObj).subscribe(() => {
     window.location.reload();
    });
  }

  // Remove an item
removeExpenditure(id): void{
this.expendituresService.deleteExpenditure(id).subscribe(() => {
  window.location.reload();
});

}
// sign out
  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
