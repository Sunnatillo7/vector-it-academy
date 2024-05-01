import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ICourse } from '@models/shared/i-course';

@Component({
    selector: 'course-cart-item',
    templateUrl: 'course-cart-item.component.html',
    standalone: true,
    imports:[MatButtonModule]
})

export class CourseCartItemComponent implements OnInit {
  @Input() item!: ICourse
  @Input() purchased: boolean = true

    ngOnInit() { }
}