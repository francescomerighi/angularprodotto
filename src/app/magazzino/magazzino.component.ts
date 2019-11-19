import { Component, OnInit } from '@angular/core';
import { Prodotti } from './prodotti.model';
import { Prodotto } from '../prodotto/prodotto.model';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {
  prodotti: Prodotti;


  constructor() { }

  ngOnInit() {
    this.prodotti = new Prodotto();
    this.prodotti.add(
      'P1', 'Mozzarella di bufala IGP', 2.56, new Date('2019-11-17'), 24);
    this.prodotti.add(
      'P2', 'Pasta De Cecco', 3.12, new Date('2019-11-17'), 10);
    this.prodotti.add(
      'P3', 'Pomodori', 4.57, new Date('2019-11-17'), 13);
    this.prodotti.add(
      'P4', 'Uova', 7.89, new Date('2019-11-17'), 33);
    this.prodotti.addd(
      'P5', 'Prosciutto crudo', 2.12, new Date('2019-11-17'), 23);
  }

}