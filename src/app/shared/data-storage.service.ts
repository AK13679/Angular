import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http ,Response, } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
 constructor(private http: Http , private recipeService: RecipeService){}

    storeRecipes(){
        let recipes = this.recipeService.getRecipes();
         return this.http.put('https://ng-recipe-book-c4d44.firebaseio.com/recipes.json',recipes);
    }

    fetchRecipes(){
        this.http.get('https://ng-recipe-book-c4d44.firebaseio.com/recipes.json').
        map((response: Response)=>{
            const recipes: Recipe[] = response.json();
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        }
        ).subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipe(recipes);
            }
        );
    }
}