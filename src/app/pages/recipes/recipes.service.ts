import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipesService {

  // private recipes: Recipe[] = [
  //   new Recipe ('Meatloaf', 'yummy'),
  //   new Recipe ('Food', 'gross')
  // ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
