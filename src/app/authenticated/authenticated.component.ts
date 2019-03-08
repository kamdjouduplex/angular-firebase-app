import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../core/auth.guard';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {

  constructor(public auth: AuthService) { }

  loggesUser: any;
  ngOnInit() {
    //console.log('state', this.myService.isLoggedIn());
  }



}
