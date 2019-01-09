import { RegisteredUser } from './../registereduser';
import { RegistereduserService } from '../registereduser.service';
import { REGISTEREDUSERS } from '../mock-registeredusers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.css']
})
export class RegisteredusersComponent implements OnInit {

  // registeredUsers = REGISTEREDUSERS;
  registeredUsers: RegisteredUser[];

  // registeredUser: RegisteredUser = {
  //     token: '',
  //     username: 'user 1',
  //     userId: '1',
  //     cuid: 1,
  //     email: '',
  //     phone: ''
  // };

  constructor(private registeredUserService: RegistereduserService) { }

  ngOnInit() {
    this.getRegisteredUsers();
  }

  // selectedUser: RegisteredUser;
  // onSelect(reguser: RegisteredUser): void {
  //   this.selectedUser = reguser;
  // }

  getRegisteredUsers(): void {
    this.registeredUserService.getRegisteredUsers()
      .subscribe(regusers => this.registeredUsers = regusers);
  }

}
