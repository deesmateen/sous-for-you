import {Ingredient} from "../../shared/services/ingredient";

export class Recipe {
  constructor(public name: string, public description: string, public ingredients: Ingredient[]) {

  }
}
