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

  getData(): string {
    return this.dataScadenza.getFullYear() + '-' + (this.dataScadenza.getMonth()+1) + '-' + this.dataScadenza.getDate();
  }

  isScaduto(): boolean {
    return this.dataScadenza < new Date();
  }

  getColor(): string {
    if(this.isScaduto()) {
      return 'red';
    }
    else {
      return 'green';
    }
  }
}