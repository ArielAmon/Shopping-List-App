import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://www.allrecipes.com/thmb/bu4s12dq2GNt-kgi9R8sZTrhQYo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pork-Schnitzel-ddmfs-3x2-113-7c044e725d604cb0b2a3827b63a7f6f6.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big fat Burger',
      'What else is missing?!',
      'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    if (index > 0 && index < this.recipes.length)
      return this.recipes.slice()[index];

    return this.recipes.slice()[0];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
