import { Component, OnInit } from '@angular/core';
import { AlbumesService } from './albumes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  public albumes: any[];
  public errorMsg;
  public success;
  public stateCreate = false;
  album: any = {};

  constructor(private _albumesService: AlbumesService) { };

  ngOnInit() {
    this.getAlbumes();
  }

  getAlbumes() {
    this._albumesService.getAlbum()
      .subscribe(success => { this.albumes = success.data; },
        error => { this.errorMsg = error; });
  }

  /*function for create albumes*/
  saveAlbum() {
    console.log("inspeccionar el envio del nombre del album", this.album);
    this._albumesService.postAlbum(this.album)
      .subscribe(success => {
        /*clean input*/
        this.album = {};
        /*call all the albums*/
        this.getAlbumes();
      },
        error => {
          this.errorMsg = error;
        });
  }

  changeStateCreate() {
    this.stateCreate = true;
  }

  cancelStateCreate() {
    this.stateCreate = false;
  }

}
