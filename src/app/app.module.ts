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
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';




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
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
