import {Component, OnInit} from '@angular/core';
import {collection, getDocs, getFirestore, query} from "firebase/firestore"
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  albums:any[] = [];
  constructor(private firebaseService:FirebaseService) {
  }

  ngOnInit(): void {
    this.firebaseService.GetAlbums()
      .then(data => {
        data.forEach(doc => {
          this.albums.push(doc.data()['name'])
        })
      })


    console.log("chujec kamulec")
  }


}
