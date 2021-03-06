import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumesComponent,
    AlbumDetailComponent,
    ImageDetailComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
