import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css']
})
export class AppCreateKittenComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() race: string;
  @Input() date: string;
  @Input() photo: string;

  constructor() { }

  ngOnInit() {
  }

  formKitten() {
  }


}
