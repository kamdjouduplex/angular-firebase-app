import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private myService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData){
    this.myService.emailLogin(formData.email, formData.password);
  }

}
