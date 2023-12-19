import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const existingIndex = this.ingredients.findIndex(
        (existing) => existing.name === ingredient.name
      );

      if (existingIndex === -1) {
        // If the ingredient with the same name doesn't exist, add it
        this.ingredients.push(ingredient);
      } else {
        // If the ingredient with the same name already exists, update the amount
        this.ingredients[existingIndex].amount += ingredient.amount;
      }
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
