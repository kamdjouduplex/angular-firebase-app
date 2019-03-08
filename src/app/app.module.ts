import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken} from '@angular/fire/firestore'; //add this
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
//import { NotifyModule } from 'notify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { DetailsComponent } from './details/details.component';

import { CoreModule } from './core/core.module';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AddstudentComponent,
    EditstudentComponent,
    DetailsComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    AuthenticatedComponent,
    //NotifyModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    CoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }], //and this too
  bootstrap: [AppComponent]
})
export class AppModule { }
