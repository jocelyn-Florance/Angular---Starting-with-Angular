import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    none: string;
    User: UserProfile = {
        name : 'Jocelyn',
        firstName : 'Simba',
        age : 27,
        quote : '',
        photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    };

    constructor() {
    }

    ngOnInit() {
    }

    displayNone() {
        if (this.none === 'hidden') {
            this.none = 'visible';
        } else {
            this.none = 'hidden';
        }
    }


}