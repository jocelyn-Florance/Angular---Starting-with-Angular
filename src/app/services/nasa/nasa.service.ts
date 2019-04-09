import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  configUrl = 'https://api.nasa.gov/planetary/apod?api_key=zaMnibcBzlEfTvN0DSJCY7FWbHMt15e5povg1c3b';

  constructor(private http: HttpClient) { }

  public getImageOfTheDay(): Observable<string> {
    const obs1: Observable<any> = this.http.get(this.configUrl);
    const treatment = (param_img: any) => {
      return param_img.url;
    };

    return obs1.pipe(map(treatment) );
  }

}

