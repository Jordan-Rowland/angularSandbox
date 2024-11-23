import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<number>();
  
  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("mushrooms", 10),
  ]
  
  constructor() { }
  
  getIngredients() {
    return this.ingredients.slice();
  }
  
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
  editIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  clearItems() {
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
