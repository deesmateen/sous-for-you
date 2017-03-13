import {Component, OnInit } from '@angular/core';
import { HttpService } from "../../shared/services/http.service";

import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: string;

  selectedRecipe: Recipe;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    // this.newRecipe();
  }


  newRecipe() {
    this.httpService.getRecipe()
      .subscribe(
        (data: any) => {
          console.log('New Data', data);
          this.recipes = data;
        },
        error => {
          console.log('Error:: Cannot Get Recipe', error);
        }
      )
  }

}
