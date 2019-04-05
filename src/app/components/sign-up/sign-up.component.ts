import { Component, OnInit } from '@angular/core';
import { Signup } from '../../core/models/sign-up';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    model: Signup = new Signup();
    UserForm: any = {};
    person: Signup = {
        username: 'jocelyn',
        email: 'hello@gmail.com'
    };

    constructor() { }

    ngOnInit() {
        console.log(this.model);
    }

    formTest() {
        console.log(this.UserForm);
    }

}
