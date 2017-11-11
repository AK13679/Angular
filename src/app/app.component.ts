import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

 ngOnInit(){
  firebase.initializeApp({
    apiKey: "",
    authDomain: "ng-recipe-book-e82c1.firebaseapp.com"
  });
 }

  OnNavigate(feature: string)
  {
      this.loadedFeature = feature;
  }
}
