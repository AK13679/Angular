import { Component, OnInit ,EventEmitter ,Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//  @Output() featureSelected = new EventEmitter<string>();

// onSelect(feature:string){

//  this.featureSelected.emit(feature);
//    }

constructor(private datastorgeservice: DataStorageService){


}
 onSaveData(){
  this.datastorgeservice.storeRecipes().subscribe(
   (response: Response)=>{
     console.log(response);
    }
  );
 }

 onFetchData(){
   this.datastorgeservice.fetchRecipes();
 }
}
