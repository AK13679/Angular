import { Recipe } from './../recipe.model';
import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
   new Recipe('Pizza','Chicken Italiano',
   'http://polkacafe.s3.amazonaws.com/articles/thumbs/ti_725_62110769558241.jpg'),
   new Recipe('KFC','Chicken meal',
   'https://assets.kfc.co.uk/3f040df6-0c9cdd0f/wicked-variety-bucket-320w.jpeg')
 ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe)
  {
  this.recipeWasSelected.emit(recipe);
  }

}
