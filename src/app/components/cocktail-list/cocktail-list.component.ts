import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  constructor(public cocktailService: CocktailService) {
  }

  ngOnInit() {
  }

}
