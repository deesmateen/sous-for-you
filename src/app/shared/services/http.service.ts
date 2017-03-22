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
      headers.append("X-Mashape-Key", "e8QahdDUqkmshAogBHfy8vrxKWKPp1o5oxajsnesgxZMzE3I3R");
      headers.append("Accept", "application/json");
    console.log('URL ', this.baseUrl);

    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', {headers})

    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  getRecipeData(recipe) {
    let headers = new Headers();
    // let params: URLSearchParams = new URLSearchParams();
    headers.set("X-Mashape-Key", 'e8QahdDUqkmshAogBHfy8vrxKWKPp1o5oxajsnesgxZMzE3I3R');
    headers.set("Accept", "application/json");

    return this.http.get(this.baseUrl + '/recipes/autocomplete?number=10&query=' + recipe, {headers,})

    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  getRecipeSearch(search) {
    let headers = new Headers();
    headers.set("X-Mashape-Key", 'e8QahdDUqkmshAogBHfy8vrxKWKPp1o5oxajsnesgxZMzE3I3R');
    headers.set("Accept", "application/json");

    return this.http.get(this.baseUrl + '/recipes/search?diet=vegetarian&excludeIngredients=coconut&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=' + search + '&type=main+course', {headers,})

      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getIngredientsData() {
    let headers = new Headers();
    headers.append("X-Mashape-Key", "e8QahdDUqkmshAogBHfy8vrxKWKPp1o5oxajsnesgxZMzE3I3R");
    headers.append("Accept", "application/json");

    console.log('URL ', this.baseUrl);

    return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', {headers})

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
