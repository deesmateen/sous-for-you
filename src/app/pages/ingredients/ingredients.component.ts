import { Component, OnInit } from '@angular/core';

import { HttpService } from "../../shared/services/http.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredient = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    // this.getIngredients();
  }

  getIngredients() {
    this.httpService.getIngredientsData()
      .subscribe(
        (data: any) => {
          console.log('Ingredients Data', data);
          this.ingredient = data;
        },
        error => {
          console.log('Error:: Cannot Get Ingredients', error);
        }
      )
  }

}
