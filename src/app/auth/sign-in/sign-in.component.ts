import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  message: string;
  username = new FormControl('');
  password = new FormControl('');
  preference = new FormControl('');

  constructor(public authService: AuthService, public router: Router, private location: Location) {
    this.message = this.getMessage();
   }
   getMessage(): string{
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit(): void {
  }
  login(): void{
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        // tslint:disable-next-line:max-line-length
        if ((this.username.value === 'bursar' && this.password.value === '12345') ||
         (this.username.value === 'enock' && this.password.value === 'abc')){
        const redirectUrl = '/bursar';

        // Redirect the user
        this.router.navigate([redirectUrl]);
        } else {
          this.router.navigate(['/sign-in']);
        }
      }
    });
  }
  goback(): void{
    this.location.back();
  }
}
