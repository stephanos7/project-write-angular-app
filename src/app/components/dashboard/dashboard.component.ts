import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user; 

  constructor(private session : SessionService) {}

  ngOnInit() {
    this.user = this.session.user;
    console.log("User we get from the session : ", this.user);
  }

}
