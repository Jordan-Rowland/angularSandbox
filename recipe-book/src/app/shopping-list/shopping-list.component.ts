import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private getIngredientsSubscription: Subscription;
  
  constructor(
    private shoppingListService: ShoppingListService,
  ) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.getIngredientsSubscription =
    this.shoppingListService
        .ingredientsChanged
        .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }
  
  ngOnDestroy(): void {
    this.getIngredientsSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.ingredientEdit.next(index);
  }
}
