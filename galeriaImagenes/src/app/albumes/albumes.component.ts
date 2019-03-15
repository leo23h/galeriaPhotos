import { Component, OnInit } from '@angular/core';
import { AlbumesService } from './albumes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  public albums: any[];
  public errorMsg;
  public stateCreate = false;

  constructor(private _albumesService: AlbumesService) { };


  ngOnInit() {
    this._albumesService.getAlbum()
      .subscribe(success => { this.albums = success.data; },
        error => { this.errorMsg = error; });
  }

  changeStateCreate() {
    this.stateCreate = true;
  }

  cancelStateCreate() {
    this.stateCreate = false;
  }

}
