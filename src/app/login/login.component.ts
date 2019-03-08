import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(private myService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  loginGoogle(){
    this.myService.googleLogin().then(
      () => this.router.navigate(['/students'])
    )
  }
}
