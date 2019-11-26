import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Prodotto } from './prodotto.model';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto: Prodotto;
  prodottoCambiato: boolean = false;

  @ViewChild('codiceInput', {static: true})codiceInput: ElementRef;
  @ViewChild('nomeInput', {static: true})nomeInput: ElementRef;
  @ViewChild('prezzoInput', {static: true})prezzoInput: ElementRef;
  @ViewChild('dataInput', {static: true})dataInput: ElementRef;
  @ViewChild('quantitaInput', {static: true})quantitaInput: ElementRef;

  constructor() {   
   }

  ngOnInit() {
    
  }

  onSalvaClick(datiEvento) {   
    let codice = this.codiceInput.nativeElement.value;
    let nome = this.nomeInput.nativeElement.value;
    let prezzo = this.prezzoInput.nativeElement.value;
    let data = new Date(this.dataInput.nativeElement.value);
    let quantita = this.quantitaInput.nativeElement.value;

    // posso effetturae controlli prima di assegnare il valore!!!
    this.prodotto.codice = codice;
    this.prodotto.nome = nome;
    this.prodotto.prezzo = prezzo;
    this.prodotto.dataScadenza = data;
    this.prodotto.quantita = quantita;

    this.prodottoCambiato = false;    
  }

  onAnnullaClick() {
    this.codiceInput.nativeElement.value = this.prodotto.codice;
    this.nomeInput.nativeElement.value = this.prodotto.nome;
    this.prezzoInput.nativeElement.value = this.prodotto.prezzo;
    this.dataInput.nativeElement.value = this.prodotto.getDataScadenza();
    this.quantitaInput.nativeElement.value = this.prodotto.quantita;

    this.prodottoCambiato = false;
  }

  onValoreCambiato() {
    this.prodottoCambiato = true;
  }

  
}