import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {getDownloadURL, getStorage, listAll, ref} from "firebase/storage";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  albums: any[] = [];
  selectedAlbum: string = "";
  isAlbumSelected: boolean = false;
  imageUrls: string[] = [];

  thumbnails:string[] = [];

  imagesLoading = false;

  constructor(private firebaseService: FirebaseService) {
  }

  GetThumbnailUrl(albumName: string) {
    this.firebaseService.GetFirstFileUrl(albumName).then(data=>{
      if(data.url != null){
        this.thumbnails.unshift(data.url);
      }else {
        this.thumbnails.unshift("")
      }
    })
  }

  SelectAlbum(albumName: string) {

    this.selectedAlbum = albumName;
    this.isAlbumSelected = true;


    const storage = getStorage();
    const path = `images/${albumName}`

    // Create a reference under which you want to list
    const listRef = ref(storage, path);

    listAll(listRef).then(
      data=>{
        for (const itemRef of data.items) {
          getDownloadURL(itemRef).then(res => {
            // console.log(res)
            this.imageUrls.push(res)
          })
        }
      }
    )
  }

  ngOnInit(): void {
    this.firebaseService.GetAlbums()
      .then(data => {
        data.forEach(doc => {
          const albumName = doc.data()['name'];
          this.albums.push(albumName)
          this.GetThumbnailUrl(albumName);
        })
      })
    // this.SelectAlbum('olsztyn')

  }


}
