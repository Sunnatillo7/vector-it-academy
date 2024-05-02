import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vector-it-academy';



  /*  Tasks 

 1. Landing page (Welcome + course details)
 2. Sign in sign up
 3. my-courses page
 4. My course details
 5. Join course page(form + payment)
 6. owned course (history roadmap, links)

*/
}
