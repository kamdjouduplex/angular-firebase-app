import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  singleStudent: any = {};

  constructor(private db: AngularFirestore, private router: Router) {
   }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.db.collection('students').ref.get()
    .then( (data) => {
      data.forEach( (student) => {
        this.singleStudent = {
          id: student.id,
          data: student.data()
        };
        this.students.push( this.singleStudent );
      })
    })
    .catch( (error) => console.log('Error: ', error));
  }

  deleteStudent(id){
    this.db.collection('students').doc(id).delete()
    .then( () => {
      console.log("Deleted");
      this.router.navigate(['/']);
    })
    .catch( (error) => console.log('Error: ', error));
  }

}
