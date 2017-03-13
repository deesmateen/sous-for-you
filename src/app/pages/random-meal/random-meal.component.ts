import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../shared/services/http.service";

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {
  randomMeal = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }


  getRandomMeal() {
    this.httpService.getData()
      .subscribe(
        (data: any) => {
          console.log('New Data', data.recipes[0]);
          this.randomMeal = data.recipes[0];
        },
        error => {
          console.log('Error:: Cannot Get Recipe', error);
        }
      )
  }
}
