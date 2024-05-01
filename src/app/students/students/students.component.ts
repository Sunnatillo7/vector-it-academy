import { Component } from '@angular/core';
import { StudentCoursesComponent } from '@students/my-courses/student-courses.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentCoursesComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

}
