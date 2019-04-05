import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-app-list-kitten',
    templateUrl: './app-list-kitten.component.html',
    styleUrls: ['./app-list-kitten.component.css']
})
export class AppListKittenComponent implements OnInit {
    Kitten = [
        {
            id: 1,
            name: 'chat 1',
            race: 'eur',
            year: '2106',
            image: 'http://www.chat-sante.fr/wp-content/uploads/2017/11/lNGUneLX_400x400.jpg'
        },
        {
            id: 2,
            name: 'chat 2',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 3,
            name: 'chat 3',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 4,
            name: 'chat 4',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 5,
            name: 'chat 5',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 6,
            name: 'chat 6',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 7,
            name: 'chat 7',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 8,
            name: 'chat 8',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 9,
            name: 'chat 9',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        },
        {
            id: 10,
            name: 'chat 10',
            race: 'eur',
            year: '2106',
            image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'
        }
    ];
    userForm: any = {};
    User = [];

    constructor() {
    }

    ngOnInit() {
        console.log(this.User);
    }

    addKitten(Kitten) {
        console.log(Kitten);
        console.log(this.User.push(Kitten));
    }

    deleteKitten(user) {
        const index = this.User.findIndex(users => users === user);
        this.User.splice(index, 1);
    }

    formKitten() {
        this.Kitten.push(this.userForm);
        this.userForm = {};
    }


}
