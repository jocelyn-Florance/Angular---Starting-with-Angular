import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css']
})
export class AppCreateKittenComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() race: string;
  @Input() year: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }


}
