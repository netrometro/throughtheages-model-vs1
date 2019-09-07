import { Component, OnInit } from '@angular/core';

import { base64image } from '.././card/card-a01/card-a01.component';

@Component({
  selector: 'app-board-t',
  templateUrl: './board-t.component.html',
  styleUrls: ['./board-t.component.css']
})
export class BoardTComponent implements OnInit {

  governo: any;

  constructor() {
    //let gov: CardA01Component = new CardA01Component();
    this.governo = base64image;
  }

  ngOnInit() {
  }

}