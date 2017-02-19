import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { ConstantsService } from './constants.service';

@Injectable()
export class HttpService {

  baseUrl: string;
  baseUrl1: string;

  constructor(
    private http: Http,
    private constants: ConstantsService
  ) {
    this.baseUrl = constants.baseUrl;
  }

  private extractData(res: Response) {
    let body;

    //check if empty, before call json
    if (res.text()) {
      body = res.json();
    }

    return body || {};
  }

  getData() {
    let headers = new Headers();
      headers.append("X-Mashape-Key", "JfUKa8tEiRmshGvtn6iN2DHbc5Qlp16KFwijsnqhbc3RoDFgjg");
      headers.append("Accept", "application/json");
    console.log('URL ', this.baseUrl);

    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', {headers})

    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  getIngredientsData() {
    let apiKey = 'qF547m3A1kCpA6V4nc54i9enR7D50v7n';
    let recipeId = 'Banana';
    console.log('URL ', this.baseUrl);

    return this.http.get('https://api2.bigoven.com/recipes?include_ing=banana' + "?api_key="+apiKey)
    // return this.http.get('https://api2.bigoven.com/recipe/' + recipeId + "?api_key="+apiKey)

      .map((response: Response) => response.json())
      .catch(this.handleError);

  }


  // getBaseUrl () {
  //   switch () {
  //     case 1:
  //       return this.baseUrl1;
  //     default:
  //       return this.baseUrl;
  //   }
  // }

  handleError(error: any) {
    return Observable.throw(error);
  }

}
