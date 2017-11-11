import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http ,Response, } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
 constructor(private http: Http , private recipeService: RecipeService, private authService: AuthService){}
 
    storeRecipes(){
        const token= this.authService.getToken();
        let recipes = this.recipeService.getRecipes();
         return this.http.put('https://ng-recipe-book-e82c1.firebaseio.com/recipes.json?auth=' +token, recipes);
    }

    fetchRecipes(){
        const token= this.authService.getToken();

        this.http.get('https://ng-recipe-book-e82c1.firebaseio.com/recipes.json?auth=' +token).
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