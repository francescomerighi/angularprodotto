import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { FornitoreComponent } from './fornitore/fornitore.component';
import { FornitoriComponent } from './fornitori/fornitori.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProdottoComponent, MagazzinoComponent, FornitoreComponent, FornitoriComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
