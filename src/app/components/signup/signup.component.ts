import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formInfo = {
    email: '',
    password: ''
  };
  
  error: string;

  constructor(private router : Router,
              private session: SessionService) { }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe();
        this.router.navigate(['login']);
  }

}
