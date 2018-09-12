import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mygameapp';
  constructor(private _http: Http) {

  }

  getGames() {

    this._http.get('http://localhost:51758/api/game').
    subscribe( (response) => {
      console.log(response.json());
      for ( const m of response.json()   ) {
        console.log(m);
      }
    });
  }
  

  postGames() {
    this._http.post('http://localhost:51758/api/game', {
    
      Player1: "Bill",
      Player2: "Bob",  
      Game_Name: "chess",
      Who_Whon: "bill" }).
    subscribe((response) =>{
      console.log(response)
    })
  }

  putGames(){
    this._http.put('http://localhost:51758/api/game/25',{
      
      Player1: "PutTest",
      Player2: "PutTest2",  
      Game_Name: "chess2",
      Who_Whon: "PutTest2" 

    }).
    subscribe ((response)=>{
      console.log(response)
    })
  }

  delGames(){
    this._http.delete('http://localhost:51758/api/game/29').subscribe ((response)=>{
      console.log(response)
    })
  }
}
