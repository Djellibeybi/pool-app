import { Component, OnInit } from '@angular/core';
import {Partij} from '../partij.model';

@Component({
  selector: 'app-partijen-list',
  templateUrl: './partijen-list.component.html',
  styleUrls: ['./partijen-list.component.css']
})
export class PartijenListComponent implements OnInit {
  partijtjes: Partij[] =  [
    new Partij('testspeler1',
      'testspeler2')
  ];

  constructor() { }

  ngOnInit() {
  }

}
