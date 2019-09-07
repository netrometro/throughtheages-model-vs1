import { Component, OnInit, Input } from '@angular/core';

import { Card } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, Card {

  title: String = "";
  @Input() image: string = "";

  constructor() { }

  ngOnInit() {
  }

}