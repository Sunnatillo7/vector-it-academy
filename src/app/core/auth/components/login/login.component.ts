import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink]
})

export class LoginComponent implements OnInit {
     loginData = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
     })

     githubLink = 'https://github.com/Sunnatillo7'

    ngOnInit() { 
        // console.log(this.loginData.value);
        
    }
    handleSubmit() { 
        console.log(this.loginData.value);
        
    }
}