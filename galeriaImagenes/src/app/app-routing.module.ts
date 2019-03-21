import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './albumes/albumes.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'albums', component: AlbumesComponent },
  { path: 'albums-detail/:id', component: AlbumDetailComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'image-detail/:id', component: ImageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AlbumesComponent,
  AlbumDetailComponent,
  ImageDetailComponent,
  ImagesComponent
]
