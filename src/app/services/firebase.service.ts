import {Injectable} from '@angular/core';
import {collection, doc, getDocs, getFirestore, query, setDoc, deleteDoc} from "firebase/firestore"
import {getDownloadURL, getStorage, listAll, ref, uploadBytes, deleteObject} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {initializeApp} from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  config = {
    apiKey: "AIzaSyAqjiWXZ5aTyAbaKl40eJnSF0zoe2A97Eg",
    authDomain: "elite-reserve-342019.firebaseapp.com",
    databaseURL: "https://elite-reserve-342019-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "elite-reserve-342019",
    storageBucket: "elite-reserve-342019.appspot.com",
    messagingSenderId: "1040129815084",
    appId: "1:1040129815084:web:61ad9fc50a605a3bc51789",
    measurementId: "G-T7YZNN4JC4"
  };

  constructor() {
    initializeApp(this.config);

  }

  async SendMultipleFiles(files: File[], storagePath: string) {
    const storage = getStorage();

    for (const file of files) {
      const storageRef = ref(storage, storagePath + file.name)

      if (file != null) {
        await uploadBytes(storageRef, file)
      }
    }

  }

  async CreateAlbum(name: string) {
    const
      db = getFirestore();

    await setDoc(doc(db, "albums", name), {
        imageCount: 0,
        name: name
      }
    )
      .then(data => console.log('successfuly created album ' + name))
      .catch(error => console.log(error))
  }

  async DeleteAlbum(name: string) {
    const db = getFirestore();
    await deleteDoc(doc(db, "albums", name));

    await this.DeleteAlbumContents(name);
  }

  async GetAlbums() {
    const q = query(collection(getFirestore(), "albums"))
    const querySnapshot = await getDocs(q);
    return querySnapshot
  }

  async GetAllFileUrls(path: string) {
    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, path);

    const storageItems = await listAll(listRef)

    const urls = []
    const names = []

    for (const itemRef of storageItems.items) {
      urls.push(await getDownloadURL(itemRef))
      names.push(itemRef.name)
    }

    return {
      urls: urls,
      names: names
    }
  }

  async GetFirstFileUrl(albumName: string) {
    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, `images/${albumName}`);


    const storageItems = await listAll(listRef)

    let fileUrl = "";

    try {
      fileUrl = await getDownloadURL(storageItems.items[0])
    } catch (e) {
      console.log(e)
    }

    return {
      url: fileUrl
    }

    return {
      url: fileUrl
    }


  }

  async DeleteAlbumContents(albumName:string){

  }
}
