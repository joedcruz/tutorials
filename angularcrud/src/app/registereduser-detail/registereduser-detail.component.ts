import { RegistereduserService } from '../registereduser.service';
import { RegisteredUser } from '../registereduser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-registereduser-detail',
  templateUrl: './registereduser-detail.component.html',
  styleUrls: ['./registereduser-detail.component.css']
})
export class RegistereduserDetailComponent implements OnInit {

  @Input() reguser: RegisteredUser;
  
  constructor(
    private route: ActivatedRoute,
    private registeredUserService: RegistereduserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRegisteredUser();
  }

  getRegisteredUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.registeredUserService.getRegisteredUser(id)
      .subscribe(reguser => this.reguser = reguser);
  }

  goBack(): void {
    this.location.back();
  }

}
