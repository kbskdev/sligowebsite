import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  photo:string = "../../assets/sligo1.jpg"
  /*photos:string[] = ["../../assets/ireland-flag.svg","../../assets/ireland-flag-in-fabric-effect.png",
    "../../assets/ireland-flag-in-grunge-effect.png","../../assets/ireland-flag-in-halftone-effect.png",
    "../../assets/ireland-flag-in-paper-effect.png","../../assets/ireland-flag-in-polygon-effect.png",
    "../../assets/ireland-flag-in-waves-effect.png","../../assets/ireland-flag-in-wood-effect.png"
  ]*/
  /*
  photos:string[] = ["url('src/assets/ireland-flag.svg')","url('src/assets/ireland-flag-in-fabric-effect.png')",
  "url('src/assets/ireland-flag-in-grunge-effect.png')","url('src/assets/ireland-flag-in-halftone-effect.png')",
  "url('src/assets/ireland-flag-in-paper-effect.png')","url('src/assets/ireland-flag-in-polygon-effect.png')",
  "url('src/assets/ireland-flag-in-waves-effect.png')","url('src/assets/ireland-flag-in-wood-effect.png')"]
  */

  counter:number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
