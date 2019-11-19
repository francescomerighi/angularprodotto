import { Component, OnInit } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
  prodotto: Prodotto;

  constructor() {
    this.prodotto = new Prodotto(
      'P1',
      'Mozzarella di bufala IGP',
      2.56,
      new Date('2019-11-20'),
      24
    )
   }

  ngOnInit() {
    console.log(this.prodotto.isScaduto());
  }

}