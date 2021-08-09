import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ScrollSpeed = 10
  ScrollChars = 1
  worldArticles:any;
  recentArticles:any;
  covidArticles:any;
  olympicArticles:any;
  opinionArticles:any;
  headArticle:any;
  subArticles:any;
  worldArticles2: any;

  constructor(private newsService: NewsService) {}

  tickerData = [
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'red',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    },
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'green',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    },
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'green',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    },
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'red',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    },
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'green',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    },
    {
    'target_currency_short_name': ' BTT',
    'price': 0.00047020,
    'color': 'red',
    'percentage': 11.206+'%',
    'base_currency_short_name': '/USDT' 
    }
];
  ngOnInit(): void {

    this.newsService.GetGaurdianSearchResult('recent').subscribe(data=>{
      this.recentArticles = data['response']['results'];
      console.log(this.recentArticles)
    })

    this.newsService.GetGaurdianSearchResult('world').subscribe(data=>{
      this.headArticle = data['response']['results'][0];
      console.log('head==>', this.headArticle)
      this.subArticles = data['response']['results'].slice(1,4);
      this.worldArticles = data['response']['results'];
    })

    this.newsService.GetGaurdianSearchResult('covid').subscribe(data=>{
      this.covidArticles = data['response']['results'].slice(1,5);
    })

    this.newsService.GetGaurdianSearchResult('olympics').subscribe(data=>{
      this.olympicArticles = data['response']['results'].slice(1,5);
    })

    this.newsService.GetGaurdianSearchResult('opinion').subscribe(data=>{
      this.opinionArticles = data['response']['results'];
    })
  }


}
