import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy {
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();
 subscription : Subscription;
 recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.subscription=  this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
       this.recipes= recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe:Recipe)
  // {
  // this.recipeWasSelected.emit(recipe);
  // }
  OnNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo : this.route});
  }

 ngOnDestroy(){
 this.subscription.unsubscribe();
  }

}
