import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {



  //put images from here to show them in the gallery
  images = [
    "../../assets/gallery/czech1.jpg",
    "../../assets/gallery/italia4.jpg",
    "../../assets/gallery/polinia_italia.jpg",
    "../../assets/gallery/polonia2.jpg",
    "../../assets/gallery/radom.jpg",

    "../../assets/gallery/slovakia1.jpg",
    "../../assets/gallery/slovakia2.jpg",
  ]

  enlargeImage(src:string){

  }

  constructor() {
  }


  ngOnInit(): void {

  }


}
