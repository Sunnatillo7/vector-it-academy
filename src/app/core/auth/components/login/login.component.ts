import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})

export class LoginComponent implements OnInit {
     loginData = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
     })

    ngOnInit() { 
        // console.log(this.loginData.value);
        
    }
    handleSubmit() { 
        console.log(this.loginData.value);
        
    }
}