import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from './shared/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  ]
})
export class AppComponent {
  spelers: Player[] = [];
  aantalSpelers: number = -1;
  gameStarted: boolean = false;

  @Output() nrPlayersChanged = new EventEmitter<{ amount: number }>();


  constructor() {
    this.onDefaultsLoaded();
  }

  onPlayerAdded(playerData: {playerName: string}) {
    this.spelers.push( new Player(playerData.playerName) );
    this.setSpelersLength();
  }

  onPlayersCleared() {
    this.spelers = [];
    this.setSpelersLength();
  }

  onDefaultsLoaded() {
    this.spelers = [
      new Player( 'Chris'),
      new Player('Udo'),
      new Player( 'Pieter'),
      new Player('Hendrik Jan')];
    this.setSpelersLength();
  }

  onDeletePlayer(speler) {
    this.spelers.splice(this.spelers.indexOf( speler ), 1);
    this.setSpelersLength();
  }

  setSpelersLength() {
    this.aantalSpelers = this.spelers.length;
  }
}
