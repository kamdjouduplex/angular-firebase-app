import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData){
    this.myService.emailSignUp(formData.email, formData.password);
  }

}
