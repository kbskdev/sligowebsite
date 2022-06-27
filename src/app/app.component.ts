import { Component } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photo:string = "../../assets/sligo1.jpg"


  title = 'sligowebsite';

  homeboll:boolean = true;

  list:boolean[] = [false,false,false,false,false,false]

  shower(id:number){
    for(let i=0;i<=6;i++){
      if(i != id){
        this.list[i]=false
      }
    }
    this.list[id] = !this.list[id];
    this.homeboll = !this.list[id];
  }
}
