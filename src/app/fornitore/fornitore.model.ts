export class Fornitore {
  codice: string;
  ragioneSociale: string;
  rappresentante: string;
  citta: string;
  cap: string;
  cell: string;
  mail: string;
  partitaIva: string;
  sitoWeb: string;

  constructor(
    codice: string,
    ragioneSociale: string,
    rappresentante: string,
    citta: string,
    cap: string,
    cell: string,
    mail: string,
    partitaIva: string,
    sitoWeb: string
  ) {
    this.codice = codice;
    this.ragioneSociale = ragioneSociale;
    this.rappresentante = rappresentante;
    this.citta = citta;
    this.cap = cap;
    this.cell = cell,
    this.mail = mail;
    this.partitaIva = partitaIva;
    this.sitoWeb = sitoWeb;
  }
}