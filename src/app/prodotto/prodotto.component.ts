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
      new Date('30/11/2019'),
      24
    )
   }

  ngOnInit() {
  }

}