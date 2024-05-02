import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ICourse } from '@models/shared/i-course';
import {MatTooltipModule} from '@angular/material/tooltip'

@Component({
    selector: 'course-cart-item',
    templateUrl: 'course-cart-item.component.html',
    standalone: true,
    imports:[MatButtonModule, MatIconModule, MatTooltipModule]
})

export class CourseCartItemComponent implements OnInit {
  @Input() item!: ICourse
  @Input() purchased: boolean = true

    ngOnInit() { }
}