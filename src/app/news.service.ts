import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  gaurApiKey = "bd636a5e-6518-4e03-a4d9-16661af68960";
  gaurUrl = "http://content.guardianapis.com/search?show-fields=all&page-size=20&api-key=";
  gaurSectionUrl = "https://content.guardianapis.com/search?show-fields=all&page-size=20&q="
  constructor(public http:HttpClient) { }

  GetGaurdianSearchResult(section:string)
  {
    return this.http.get(this.gaurSectionUrl + section + "&api-key=" + this.gaurApiKey );
  }
}
