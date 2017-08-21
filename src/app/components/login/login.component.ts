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
        this.router.navigate(['stories']);
      },
      (err) => {
        this.error = err;
      });
  }
}