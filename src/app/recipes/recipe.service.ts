import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
   recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('Pizza','Chicken Italiano',
        'http://polkacafe.s3.amazonaws.com/articles/thumbs/ti_725_62110769558241.jpg',
        [ new Ingredient('Bread',2)]),
        new Recipe('KFC','Chicken meal',
        'https://assets.kfc.co.uk/3f040df6-0c9cdd0f/wicked-variety-bucket-320w.jpeg',
        [ new Ingredient('Chicken',2)]),
        new Recipe('Chicken Biryani','Hyderabadi Chicken Biryani',
        'http://www.paradisefoodcourt.in/images/gallery/food-images/thumb/im1.jpg',
        [ new Ingredient('Rice',2)] ),
      ];

      constructor(private shoppingListService: ShoppingListService ){

      }

      getRecipes()
      {
          return this.recipes.slice();
      }

      getRecipe(id:number)
      {
          return this.recipes.slice()[id];
      }

      addIngtoShoppingList(ingredients : Ingredient[]){
            this.shoppingListService.addIngredients(ingredients);
      }

}