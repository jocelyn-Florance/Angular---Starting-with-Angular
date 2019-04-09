import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormArray, FormControl} from '@angular/forms';

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
    types = [
        {name: 'Film'},
        {name: 'Serie'},
        {name: 'Episode'},
    ];
    fiches = [
        {name: 'complete'},
        {name: 'courte'},
    ];

    orderForm = this.fb.group({
        ident: ['', [Validators.required], this.isRequiredValidator('aaa', 'bbb')],
        titre: ['', [Validators.required]],
        type: new FormControl(this.types[1].name),
        years: ['', [Validators.required, Validators.min(1900), Validators.max(2019)]],
        fiche: new FormControl(this.fiches[1].name),
    });

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(JSON.stringify(this.orderForm.value));
    }

    public isRequiredValidator(ident: string, titre: string) {
        console.log(ident, titre);
    }

    public rangeDateValidator(min: number, max: number) {

    }


}
