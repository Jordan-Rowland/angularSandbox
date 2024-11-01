import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  name: string;
  amount: number;

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }
  
  addIngredient() {
    if (!this.name || !this.amount) { return; }
    this.shoppingListService.addIngredients([{ name: this.name, amount: this.amount }]);
    this.name = "";
    this.amount = null;
  }

}
