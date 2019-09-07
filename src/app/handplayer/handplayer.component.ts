import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handplayer',
  templateUrl: './handplayer.component.html',
  styleUrls: ['./handplayer.component.css']
})
export class HandplayerComponent implements OnInit {

  limitcards: number = 4;

  constructor() { }

  ngOnInit() {
  }

}