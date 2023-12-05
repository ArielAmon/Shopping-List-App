import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelectedFromList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Testing recipe',
      'https://live.staticflickr.com/4407/36472805010_c77f134830_b.jpg'
    ),
    new Recipe(
      'Test2',
      'Testing recipe2',
      'https://live.staticflickr.com/4407/36472805010_c77f134830_b.jpg'
    ),
  ];

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedFromList.emit(recipe);
  }
}
