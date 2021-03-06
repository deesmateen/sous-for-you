import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../shared/services/http.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getRecipe();
  }


  getRecipe() {
    this.httpService.getData()
      .subscribe(
        (data: any) => {
          console.log('New Data', data.Results);
          this.recipes = data.Results;
        },
        error => {
          console.log('Error:: Cannot Get Recipe', error);
        }
      )
  }
}
