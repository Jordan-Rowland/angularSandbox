import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Stromboli", "Pig Soup", "https://minimaxir.com/2022/07/food-photography-ai/featured.png"),
    new Recipe("Test", "Test Soup", "https://media.licdn.com/dms/image/D5612AQEvo40xkkjVVA/article-cover_image-shrink_720_1280/0/1683310503546?e=2147483647&v=beta&t=NfgG6tdF5lNETLNOorgz6h0jpFcit8aGUSaMu53vM_A"),
    new Recipe("Spaghetti", "Italian Soup", "https://img.freepik.com/premium-photo/modern-food-stylist-expertly-decorating-meal-presentation-generative-ai_506134-2254.jpg"),
  ];
  @Output() selectedRecipeItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(selectedRecipeItem: Recipe) {
    this.selectedRecipeItem.emit(selectedRecipeItem);
  }

}
