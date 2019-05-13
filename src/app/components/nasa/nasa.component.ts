import {Component, OnInit} from '@angular/core';
import {NasaService} from '../../services/nasa/nasa.service';


@Component({
    selector: 'app-nasa',
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
    public imgOfTheDay = '';

    constructor(public nasaService: NasaService) {
    }

    ngOnInit() {
        this.nasaService.getImageOfTheDay().subscribe(
            (param_img: string) => {
                this.imgOfTheDay = param_img;
            }
        );
    }

}
