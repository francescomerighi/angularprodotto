import { Prodotto } from '../prodotto/prodotto.model';

export class Prodotti {
  dati: Prodotto[];

  constructor() {
    this.dati = [];
  }

  getItem(index: number): Prodotto {
    return this.dati[index];
  }

  getItems(): Prodotto {
    return this.dati;
  }

  add(item: Prodotto): void {
    this.dati.push(item);
  }
}