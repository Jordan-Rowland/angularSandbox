import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  name: string;
  amount: number;
  
  addIngredient() {
    if (!this.name || !this.amount) { return; }
    this.ingredientAdded.emit(
      new Ingredient(this.name, this.amount)
    );
    this.name = "";
    this.amount = null;
  }

}
