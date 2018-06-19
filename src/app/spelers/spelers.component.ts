import {Component, OnInit} from '@angular/core';
import {Player} from '../shared/player.model';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.css']
})
export class SpelersComponent implements OnInit {
  newPlayer = '';
  spelers: Player[] = [];

  constructor() {
    this.onLoadDefaultPlayers();
  }

  ngOnInit() {

  }

  onCreatePlayer() {
    this.spelers.push({name: this.newPlayer});
    console.log(this.spelers);
    this.newPlayer = '';
  }

  onClearPlayers() {
    this.spelers = [];
  }

  onDeletePlayer(speler) {
    this.spelers.splice(this.spelers.indexOf( speler ), 1);
  }

  onLoadDefaultPlayers() {
    this.spelers = [
      new Player( 'Chris'),
      new Player('Udo'),
      new Player( 'Pieter'),
      new Player('Hendrik Jan')
];
  }
}
