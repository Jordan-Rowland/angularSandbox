import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      "Stromboli",
      "Pig Soup",
      "https://minimaxir.com/2022/07/food-photography-ai/featured.png",
      [
        new Ingredient("Pig Stock", 1),
        new Ingredient("truffles", 1),
        new Ingredient("carrots", 1),
      ],
    ),
    new Recipe(
      "Test",
      "Test Soup",
      "https://media.licdn.com/dms/image/D5612AQEvo40xkkjVVA/article-cover_image-shrink_720_1280/0/1683310503546?e=2147483647&v=beta&t=NfgG6tdF5lNETLNOorgz6h0jpFcit8aGUSaMu53vM_A",
      [
        new Ingredient("Chicken Stock", 1),
        new Ingredient("Celery", 1),
        new Ingredient("Shallots", 1),
      ],
    ),
    new Recipe(
      "Spaghetti",
      "Italian Soup",
      "https://img.freepik.com/premium-photo/modern-food-stylist-expertly-decorating-meal-presentation-generative-ai_506134-2254.jpg",
      [
        new Ingredient("noodles", 1),
        new Ingredient("Marinara sauce", 1),
        new Ingredient("meatballs", 1),
      ],
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}