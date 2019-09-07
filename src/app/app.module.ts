import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { LightboxModule } from 'primeng/lightbox';
import { DragDropModule } from 'primeng/dragdrop';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardComponent } from './card/card.component';
import { HandplayerComponent } from './handplayer/handplayer.component';
import { BoardComponent } from './board/board.component';
import { TecnologyComponent } from './tecnology/tecnology.component';
import { CultureComponent } from './culture/culture.component';
import { MilitaryComponent } from './military/military.component';
import { DeckDiscoveryComponent } from './deck-discovery/deck-discovery.component';
import { DeckColoniesComponent } from './deck-colonies/deck-colonies.component';
import { DeckWondersComponent } from './deck-wonders/deck-wonders.component';
import { BoardSComponent } from './board-s/board-s.component';
import { BoardTComponent } from './board-t/board-t.component';
import { AreaComponent } from './area/area.component';
import { CardA01Component } from './card/card-a01/card-a01.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ButtonModule, LightboxModule, AccordionModule, DragDropModule ],
  declarations: [ AppComponent, MenubarComponent, TimelineComponent, CardComponent, HandplayerComponent, BoardComponent, TecnologyComponent, CultureComponent, MilitaryComponent, DeckDiscoveryComponent, DeckColoniesComponent, DeckWondersComponent, BoardSComponent, BoardTComponent, AreaComponent, CardA01Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
