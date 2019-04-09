import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cocktail } from '../../core/models/cocktail';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    configUrl = 'assets/data/cocktails.json';
    constructor(private http: HttpClient) {}

    public getCocktails(): Observable<Cocktail[]> {
        const obs1: Observable<any> = this.http.get(this.configUrl);
        const treatment = (paramCocktails: any) => {
            return paramCocktails as Cocktail[];
        };

        return obs1.pipe(map(treatment) );
    }
}
