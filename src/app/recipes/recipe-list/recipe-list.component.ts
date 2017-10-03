import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
   new Recipe('Pizza','Chicken Italiano',
   'http://www.baltana.com/files/wallpapers-5/Pizza-HD-Desktop-Wallpaper-15280.jpg'),
 ];
  constructor() { }

  ngOnInit() {
  }

}
