import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  type = [
    { name: 'film' },
    { name: 'serie' },
    { name: 'episode' }
  ];
  fiche = [
    { name: 'complete' },
    { name: 'courte' },
  ];

  orderForm = this.fb.group({
    identifiant: ['', Validators.required],
    titre: ['', [Validators.required, Validators.max(5)]],
    type: new FormArray([]),
    years: ['', [Validators.required, Validators.email]],
    fiche: new FormArray([]),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log('oderForm submitted : ', this.orderForm.value);
  }



}
