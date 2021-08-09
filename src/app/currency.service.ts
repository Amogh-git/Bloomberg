import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private api="https://marketdata.tradermade.com/api/v1/live?currency="
  private apiKey = "&api_key=2mXOHQY7jXDU5aQy_BRr";
  constructor(private http:HttpClient) { }

  getCurrency(pairs:string){
    return this.http.get(this.api+pairs+this.apiKey);
  }

}
