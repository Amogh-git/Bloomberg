import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrencyComponent } from './currency/currency.component';
import { NgTickerTapeModule } from 'ng-ticker-tape';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';
import {CurrencyService} from './currency.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTickerTapeModule,
    HttpClientModule
  ],
  providers: [NewsService,CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
