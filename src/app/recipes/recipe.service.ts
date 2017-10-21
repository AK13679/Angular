import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
  // recipeSelected = new EventEmitter<Recipe>();
recipeChanged = new Subject<Recipe[]>();

  private  recipes: Recipe[] = [
        new Recipe('Pizza','Chicken Italiano',
        'http://polkacafe.s3.amazonaws.com/articles/thumbs/ti_725_62110769558241.jpg',
        [ new Ingredient('Bread',2),
        new Ingredient('Cheese',2)]),
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

      getRecipe(index: number)
      {
          return this.recipes[index];
      }

      addIngtoShoppingList(ingredients: Ingredient[]){
            this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }

      //to set recipes from firebase
      
      setRecipe(recipes: Recipe[]){
        this.recipes = recipes ;
        this.recipeChanged.next(this.recipes.slice());
    }

      updateRecipe(index: number,newRecipe: Recipe)
      {
            this.recipes[index]= newRecipe;
            this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number)
      {
          this.recipes.splice(index,1);
          this.recipeChanged.next(this.recipes.slice());
      }
}