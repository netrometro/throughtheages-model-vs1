import { Component, OnInit } from '@angular/core';

import { AppService } from '.././app.service';

import { Card } from '.././card/card.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  cards: Card[];

  constructor(private app: AppService) {
    this.cards = this.app.cards;
  }

  ngOnInit() {
  }
}