import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.css']
})
export class SpelersComponent implements OnInit {
  newPlayer = '';

  @Output() playerAdded = new EventEmitter<{ playerName: string }>();
  @Output() playersCleared = new EventEmitter();
  @Output() defaultsLoaded = new EventEmitter();

  @Input() aantalSpelers;
  @Input() gameStarted;

  constructor() {
  }

  ngOnInit() {

  }

  onCreatePlayer() {
    this.playerAdded.emit({playerName: this.newPlayer});
    this.newPlayer = '';
  }

  onClearPlayers() {
    this.playersCleared.emit();
  }

  onLoadDefaultPlayers() {
    this.defaultsLoaded.emit();
  }

}
