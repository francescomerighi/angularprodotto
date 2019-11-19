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
  corrente: number;
  
  constructor() { }

  ngOnInit() {
    this.prodotti = new Prodotti();
    this.prodotti.add(new Prodotto('P1', 'Mozzarella di bufala IGP', 2.32, new Date('2019-11-20'), 14));
    this.prodotti.add(new Prodotto('P2', 'Prosciutto crudo', 2.55, new Date('2019-11-10'), 34));
    this.prodotti.add(new Prodotto('P3', 'Pasta De Cecco', 0.59, new Date('2019-11-10'), 56));
    this.prodotti.add(new Prodotto('P4', 'Acqua frizzante', 3.64, new Date('2019-11-22'), 24));
    this.prodotti.add(new Prodotto('P5', 'Pomodori', 8.65, new Date('2019-11-10'), 4));
    this.corrente = 0;
  }

  setCorrente(index: number) {
    this.corrente = index;
  }

  addNuovoProdotto() {
    this.prodotti.add(new Prodotto('nuovo', '', 0.00, new Date(), 0));
    this.corrente = this.prodotti.getLastIndex();
  }

}