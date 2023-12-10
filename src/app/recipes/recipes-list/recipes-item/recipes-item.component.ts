import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
