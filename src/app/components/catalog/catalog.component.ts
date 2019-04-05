import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  Item =  [
    { id: 1, name: 'article 1', price: '', promo: 4},
    { id: 2, name: 'article 2', price: 36, promo: 4},
    { id: 3, name: 'article 3', price: '', promo: 4},
    { id: 4, name: 'article 4', price: 16, promo: ''},
    { id: 5, name: 'article 5', price: 64, promo: 4},
    { id: 6, name: 'article 6', price: 12, promo: 4},
    { id: 7, name: 'article 7', price: 45, promo: ''},
    { id: 8, name: 'article 8', price: 87, promo: 4},
    { id: 9, name: 'article 9', price: 676, promo: 4},
    { id: 10, name: 'article 10', price: 560, promo: 4}
  ];


  constructor() { }

  ngOnInit() {
  }

}
