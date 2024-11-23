import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;

  editSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }
  
  ngOnInit(): void {
    this.editSubscription = this.shoppingListService
        .ingredientEdit
        .subscribe((index: number) => {
          this.editedItemIndex = index;
          this.editMode = true
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
  
  addEditIngredient(form: NgForm) {
    const f = form.value;
    if (!f.name || !f.amount) { return; }
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.editedItemIndex, { name: f.name, amount: f.amount });
    } else {
      this.shoppingListService.addIngredients([{ name: f.name, amount: f.amount }]);
    }
    this.editMode = false;
    this.form.reset();
  }

  deleteIngredient() {
    if (!this.editMode) return;
    this.shoppingListService.deleteItem(this.editedItemIndex);
    this.editMode = false;
    this.form.reset();
  }

  clearIngredients() {
    // This is only to clear the entire list
    // this.shoppingListService.clearItems();
    this.editMode = false;
    this.form.reset();
  }

}
