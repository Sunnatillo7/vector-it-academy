import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})

export class SignUpComponent implements OnInit {

    signUpData = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    })


    handleSubmit(){
        console.log(this.signUpData.value);
        
    }

    ngOnInit() { }
}