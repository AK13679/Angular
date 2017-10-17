import { NgModule } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  subscription: Subscription;
  editMode = false ;
  editedItemIndex : number;
  editedItem: Ingredient;
  @ViewChild('f') slform : NgForm;
// @ViewChild('nameInput')  nameInputRef : ElementRef;
// @ViewChild('amountInput')  amountInputRef : ElementRef;

//@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
     (index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slform.setValue({
        name : this.editedItem.name,
        amount : this.editedItem.amount
      });
}
    );
  }

  onAddItem(form: NgForm){
    //  const ingName = this.nameInputRef.nativeElement.value;
    //  const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const newIng = new Ingredient(ingName,ingAmount);
    // this.ingredientAdded.emit(newIng);
if(this.editMode)
{
  this.shoppingListService.updateIngredient(this.editedItemIndex,newIng)
}
else
{
  this.shoppingListService.addIngredient(newIng);
}
this.editMode = false;
form.reset();
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
