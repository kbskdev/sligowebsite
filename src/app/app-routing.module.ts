import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {AboutsligoComponent} from "./aboutsligo/aboutsligo.component";

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'aboutsligo', component:AboutsligoComponent},


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
