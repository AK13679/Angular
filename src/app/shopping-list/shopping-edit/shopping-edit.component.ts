import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef ,ViewChild ,Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput')  nameInputRef : ElementRef;
@ViewChild('amountInput')  amountInputRef : ElementRef;

//@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = this.amountInputRef.nativeElement.value;
     const newIng = new Ingredient(ingName,ingAmount);
    // this.ingredientAdded.emit(newIng);
    this.shoppingListService.addIngredient(newIng);
  }
}
