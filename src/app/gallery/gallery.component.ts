import {Component, OnInit} from '@angular/core';
import {collection, getDocs, getFirestore, query} from "firebase/firestore"


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  getAlbums = async () => {
    // const q = query(collection(db, "cities"), where("capital", "==", true));

    const q = query(collection(getFirestore(), "albums"))
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
    return querySnapshot
  }

  constructor() {
  }

  ngOnInit(): void {
    this.getAlbums().then(res=>{
      console.log(res)
    })

    console.log("chujec kamulec")
  }


}
