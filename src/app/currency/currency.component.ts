import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../currency.service';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  now: string;
  financeArticles:any;
  ads: any;

  constructor(private fxService:CurrencyService, private newsService: NewsService) {
    this.now = new Date().toString().split(' ')[4];

   }
  FXRates:any;
  time = new Date();
  pairs = "EURGBP,GBPJPY"
  ngOnInit(): void {
    //this.getFXRates();
    this.newsService.GetGaurdianSearchResult('finance').subscribe(data=>{
      this.financeArticles = data['response']['results'];
      console.log(this.financeArticles)
    })
    this.newsService.GetGaurdianSearchResult('advertisement').subscribe(data=>{
      this.ads = data['response']['results'];
      console.log(this.ads)
    })
  }

  getFXRates(){
    this.fxService.getCurrency(this.pairs).subscribe(data=>{
      this.FXRates=data['quotes'];
      console.log(this.FXRates);
    })
  }



}
