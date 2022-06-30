import { Component,OnInit } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  photo:string = "../../assets/polonia2.jpg"

  photos:string[] = ["../../assets/polonia2.jpg","../../assets/chujec_kamulec.jpg","../../assets/chujec_kamulec2.jpg","../../assets/chujec_kamulec3.jpg"]


  title = 'sligowebsite';

  homeboll:boolean = true;

  list:boolean[] = [false,false,false,false,false,false]

  counter:number = 1

  changer(){
    setInterval(()=>{
      this.counter++
      if(this.counter>=this.photos.length){
        this.counter=0
      }
      this.photo = this.photos[this.counter]
    },7000)
  }

  shower(id:number){
    for(let i=0;i<=6;i++){
      if(i != id){
        this.list[i]=false
      }
    }
    this.list[id] = !this.list[id];
    this.homeboll = !this.list[id];
  }
  ngOnInit() {
    this.changer()
  }
}
