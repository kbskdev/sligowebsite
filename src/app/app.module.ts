import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutsligoComponent } from './aboutsligo/aboutsligo.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const config = {
  apiKey: "AIzaSyAqjiWXZ5aTyAbaKl40eJnSF0zoe2A97Eg",
  authDomain: "elite-reserve-342019.firebaseapp.com",
  databaseURL: "https://elite-reserve-342019-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "elite-reserve-342019",
  storageBucket: "elite-reserve-342019.appspot.com",
  messagingSenderId: "1040129815084",
  appId: "1:1040129815084:web:61ad9fc50a605a3bc51789",
  measurementId: "G-T7YZNN4JC4"
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    ContactComponent,
    AboutusComponent,
    AboutsligoComponent,
    ServicesComponent,
    FaqComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
