import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  Cocktail = [
    { name: 'coktail 1', price: 23, img: 'url' },
    { name: 'coktail 2', price: 33, img: 'url 2' },
    { name: 'coktail 3', price: 33, img: 'url 3' },
    { name: 'coktail 4', price: 73, img: 'url 4' },
    { name: 'coktail 5', price: 13, img: 'url 5' }
  ];
  constructor() { }

  public getCocktails() {
    return this.Cocktail;
  }


}
