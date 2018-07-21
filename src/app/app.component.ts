import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  degreeTypeOptions = [];

  students: Student[];

  degreeTypeSelected = '';

  constructor(private _studentService: StudentService) {

    this.degreeTypeOptions = [
      { id: '', name: 'todos' },
      { id: 'pregrado', name: 'pregrado' },
      { id: 'maestria', name: 'maestria' },
      { id: 'doctorado', name: 'doctorado' }
    ];
  }

  onSearch(): void {

    this.getStudentsByType(this.degreeTypeSelected);
  }

  getStudentsByType(degreeType: string): void {

    this._studentService.getStudentsByType(degreeType).subscribe(
      (response: any) => {

        this.students = response;
      },
      (error: any) => {
      }
    );
  }


}
