import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Object = {
		email: '',
		password: '',
  }
  
  error = null;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  login() {
    this.session.login(this.user).subscribe(
      (data) => {
        console.log("this is the data i expect when logging in: ", data);
        console.log("this is the token i expect when logging in: ", data.token);
        console.log("this is the user i expect when logging in: ", data.user);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        this.error = err;
      });
  }
}