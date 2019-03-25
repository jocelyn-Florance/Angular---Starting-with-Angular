import { Component, OnInit } from '@angular/core';
import { Signup } from '../sign-up';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    person: Signup = {
        username: 'jocelyn',
        email: 'hello@gmail.com'
    };

    constructor() { }

    ngOnInit() {
    }

}
