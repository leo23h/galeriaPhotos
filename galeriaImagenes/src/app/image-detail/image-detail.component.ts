import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { ImageDetailService } from './image-detail.service';
import { AlbumDetailService } from '../album-detail/album-detail.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imageInfo: any = {};
  albumInfo: any = {};
  errorMsg: any = {};

  /*constructor*/
  constructor(private route: ActivatedRoute, private router: Router, private imageDetailService: ImageDetailService, private albumDetailService: AlbumDetailService) { }

  /*init*/
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = String(params.get('id'));
      /*call function image details */
      this.getImage(id);
    });
  }

  /*function for get image*/
  getImage(id) {
    /*call the service */
    this.imageDetailService.getImageById(id)
      .subscribe(success => {
        this.imageInfo = success.data[0].images[0];
        this.getAlbum(success.data[0]._id);
      },
        error => { this.errorMsg = error; });
  }

  getAlbum(id) {
    this.albumDetailService.getAlbumById(id)
      .subscribe(
        success => {
          this.albumInfo = success.data;
        },
        error => { this.errorMsg = error; }
      )
  }

  back(album) {
     this.router.navigate(['/albums-detail', album._id]);
  }

  deleteImage(idAlbum, idImage){
     this.imageDetailService.deleteImage(idAlbum, idImage)
     .subscribe(
       success => {
          this.back(idAlbum);
       }, 
        error => { 
          this.errorMsg = error; 
        })
  }

}
