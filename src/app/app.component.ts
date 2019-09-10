import { Component, ViewEncapsulation } from '@angular/core';

import { Player } from './model/player.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
 encapsulation: ViewEncapsulation.None
})
export class AppComponent  {

  display: boolean = true;
  userName: string = "Human";
  players: Player[];
  
  constructor() {
    


  }

  ngOnInit() {
  }

  enterName() {
    console.log(this.userName);
    

    this.display = false;
  }
}
