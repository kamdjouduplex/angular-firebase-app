import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-firebase-app';

  items: Observable<any[]>;
  constructor(private db: AngularFirestore, public auth: AuthService ) {
    //this.items = db.collection('items').valueChanges();

  }

  ngOnInit() {
  }

  addCity(){
    // Add a new document in collection "cities"
    this.db.collection("cities").doc("CM").set({
      name: "Douala Cameroon",
      state: "Douala",
      country: "CM"
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  addCityGeneretedId(){
    // Add a new document in collection "cities"
    this.db.collection("cities").add({
      name: "New York City",
      state: "Ney York",
      country: "US"
    })
    .then(function() {
      console.log("Document successfully written with genereted Id");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  updateCity(){
    let city = this.db.collection('cities').doc('CM');
    city.update({
      state: 'Yaounde',
      population: 5000000
    })
    .then( () => console.log('Updated successfully') )
    .catch( (error) => console.log('Error updating the document: ', error));
  }


  
}
