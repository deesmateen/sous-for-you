import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipes/recipe'

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  private recipes: Recipe[] = [
    new Recipe ('Meatloaf', 'yummy', []),
    new Recipe ('Food', 'gross', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
