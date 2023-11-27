import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Testing recipe',
      'https://live.staticflickr.com/4407/36472805010_c77f134830_b.jpg'
    ),
    new Recipe(
      'Test11',
      'Testing recipe222',
      'https://live.staticflickr.com/4407/36472805010_c77f134830_b.jpg'
    ),
  ];
}
