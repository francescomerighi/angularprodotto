export class Prodotto {
  codice: string;
  nome: string;
  prezzo: number;
  dataScadenza: Date;
  quantita: number;

  constructor(codice, nome, prezzo, dataScadenza, quantita) {
    this.codice = codice;
    this.nome = nome;
    this.prezzo = prezzo;
    this.dataScadenza = dataScadenza;
    this.quantita = quantita;
  }
}