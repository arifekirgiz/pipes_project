import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { IsimPipe } from './pipe/isim.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    IsimPipe
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
