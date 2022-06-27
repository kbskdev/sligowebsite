import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  mode:boolean[] = [false,false]

  switch(id:number){
    if(id==0){
      this.mode[0]=!this.mode[0]
      this.mode[1]=false
    }
    else {
      this.mode[1]=!this.mode[1]
      this.mode[0]=false
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
