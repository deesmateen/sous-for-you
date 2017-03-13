import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from "@angular/forms";

@Component({
  selector: 'shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['shopping-list-add.component.scss']
})
export class ShoppingListAddComponent implements OnInit {

  shoppingListForm: FormGroup;
  isAdd = true;

  constructor(
    private shoppingForm: FormBuilder,
  ) {
    this.shoppingListForm = new FormGroup({
      'shoppingList': new FormArray([
        new FormControl('', Validators.required)
      ])
    })
  }

  ngOnInit() {
  }

  onShoppingListSubmit() {
    console.log('Form Submitted', this.shoppingListForm);
  }

  addNewIngredient() {
    (<FormArray>this.shoppingListForm.controls['shoppingList']).push(new FormControl('', Validators.required));
  }

  deleteNewIngredient() {
    console.log('derek');
  }

  clearNewIngredient() {
    this.shoppingListForm.reset()
  }

}
