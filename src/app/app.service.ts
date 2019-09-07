import { Injectable } from '@angular/core';

import { Card } from './card/card.interface';
import { CardComponent } from './card/card.component';
import { CardA01Component } from './card/card-a01/card-a01.component';
import { CardA02Component } from './card/card-a02/card-a02.component';
import { CardA03Component } from './card/card-a03/card-a03.component';

@Injectable()
export class AppService {

  cards: Card[] = [];

  constructor() {
    //Preenche o array com cartas vazias
    for (let i=0; i < 14; i++) {
      this.cards[i] = new CardComponent();
    }

    // Um array com todas as cartas, incluindo as repetidas.
    this.cards[0] = new CardA01Component();
    this.cards[1] = new CardA02Component();
    this.cards[2] = new CardA02Component();
    this.cards[3] = new CardA03Component();
    this.cards[4] = new CardA03Component();
    // Embaralhando o array
    this.cards = this.shuffle(this.cards);

    // Testa o embaralhamento
    for (let i=0; i<this.cards.length; i++) {
      console.log(this.cards[i].title);
    }
  }

  private shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
