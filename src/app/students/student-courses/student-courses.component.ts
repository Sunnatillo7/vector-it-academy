import { Component, OnInit, inject } from '@angular/core';
import { CourseCartItemComponent } from '../../shared/course-cart-item/course-cart-item.component';
import { ICourseResponse, StudentsService } from '@students/services/students.service';

@Component({
    selector: 'student-courses',
    templateUrl: 'student-courses.component.html',
    standalone: true,
    imports: [CourseCartItemComponent]
})

export class StudentCoursesComponent implements OnInit {
       studentService = inject(StudentsService)

       allCourses?: ICourseResponse

    ngOnInit() { 
        this.studentService.getAllCourses().subscribe((courses) =>{
            this.allCourses = courses
        })
    }
}