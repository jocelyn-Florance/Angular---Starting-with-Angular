import {Component, OnInit} from '@angular/core';
import {
    FormBuilder,
    Validators,
    FormGroup,
    FormArray,
    FormControl,
    AbstractControl,
    ValidationErrors,
    ValidatorFn

} from '@angular/forms';

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
    min = 1900;
    max = 2018;
    types = [
        {name: 'Film', id: 'film'},
        {name: 'Serie', id: 'serie'},
        {name: 'Episode', id: 'episode'},
    ];
    fiches = [
        {name: 'complete', id: 'complete'},
        {name: 'courte', id: 'courte'},
    ];

    orderForm = this.fb.group({
        user: this.fb.group({
                ident: [''],
                titre: [''],
            },
            {validators: this.isRequiredValidator('ident', 'titre')},
        ),
        type: new FormControl(this.types[1].name),
        years: ['', this.rangeDateValidator(this.min, this.max)],
        fiche: new FormControl(this.fiches[1].name),
    });

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {

    }

    onSubmit() {
        console.log(JSON.stringify(this.orderForm.value));
    }

    isRequiredValidator(req1, req2): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.get(req1).value !== '' && control.get(req2).value !== '') {
                return null;
            } else {
                return {isRequired: {actual: control.get(req1).value, expected: control.get(req2).value}};
            }
        };
    }

    rangeDateValidator(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const year = control.value;
            if (min <= year && year <= max) {
                return null;
            } else {
                return {min: {value: {min, max}}};
            }
        };
    }


}
