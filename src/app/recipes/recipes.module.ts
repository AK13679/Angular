import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from "@angular/core";

import { DropdownDirective } from './../shared/dropdown.directive';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    ],
    imports:[
        CommonModule,   
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})

export class RecipesModule{

}