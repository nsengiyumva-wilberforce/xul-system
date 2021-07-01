import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
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
        const redirectUrl = '/bursar';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout(): void{
    this.authService.logout();
    this.message = this.getMessage();
  }

}
