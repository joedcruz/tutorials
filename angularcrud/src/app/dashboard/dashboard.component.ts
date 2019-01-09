import { RegistereduserService } from '../registereduser.service';
import { RegisteredUser } from '../registereduser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  registeredUsers: RegisteredUser[] = [];

  constructor(private registeredUserService: RegistereduserService) { }

  ngOnInit() {
    this.getRegisteredUsers();
  }

  getRegisteredUsers(): void {
    this.registeredUserService.getRegisteredUsers()
      .subscribe(reguser => this.registeredUsers = reguser.slice(1, 5));
  }

}
