import { Component, OnInit } from '@angular/core';
import { AlbumesService } from './albumes.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private _albumesService: AlbumesService, private router: Router) { };

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

  selectAlbum(album) {
    this.router.navigate(['/albums-detail', album._id]);
  }

  changeStateCreate() {
    this.stateCreate = true;
  }

  cancelStateCreate() {
    this.stateCreate = false;
  }

}
