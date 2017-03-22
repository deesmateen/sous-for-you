import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipes/recipe'
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  public searchString: string;
  public recipes: Array<any>;
  public recipeSearchString: string;
  public newRecipes: Array<any>;

  selectedRecipe: Recipe;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {}


  newRecipe() {
    this.httpService.getRecipeData(this.searchString)
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

  recipeSearch() {
    this.httpService.getRecipeSearch(this.recipeSearchString)
      .subscribe(
        (data: any) => {
          console.log('Recipe Search', data.results);
          this.newRecipes = data.results;
        },
        error => {
          console.log('Error:: Cannot get recipes', error);
        }
      )
  }
}
