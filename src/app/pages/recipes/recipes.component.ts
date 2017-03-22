import {Component, OnInit } from '@angular/core';
import { HttpService } from "../../shared/services/http.service";

import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {}


}
