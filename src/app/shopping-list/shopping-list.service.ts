
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
private ingredients: Ingredient [] =[
     //   new Ingredient('Chicken',2)
      ];

      getIngredients()
      {
         return  this.ingredients.slice();
      }

      getIngredient(index:number)
      {
         return  this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient)
      {
          this.ingredients.push(ingredient);
          this.ingredientAdded.next(this.ingredients.slice());
      }

     addIngredients(ingredients: Ingredient[])
     {
    //         for(let ingredient of ingredients){
    //             this.addIngredient(ingredient);
    //         }
 
       this.ingredients.push(...ingredients); // spread operator to send it as single object
       this.ingredientAdded.next(this.ingredients.slice());
     }

     updateIngredient(index : number, newIngredient : Ingredient){
        this.ingredients[index]=  newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());

     }

     deleteIngredient(index : number){
         this.ingredients.splice(index,1);
         this.ingredientAdded.next(this.ingredients.slice());
     }
}