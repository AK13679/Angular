
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
private ingredients: Ingredient [] =[
        new Ingredient('Chicken',2)
      ];

      getIngredients()
      {
         return  this.ingredients.slice();
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
}