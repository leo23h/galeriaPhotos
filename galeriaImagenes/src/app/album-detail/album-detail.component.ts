import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlbumDetailService } from './album-detail.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  //globals variables
  album: any = {};
  imagesList: any = [];
  errorMsg: any = {};
  fileName: String;
  imageBase64: String;
  file: File;
  stateSaveImage: boolean = false;

  //constructor
  constructor(private route: ActivatedRoute, private router: Router, private _albumDetailservice: AlbumDetailService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.getInfoAlbum(id);
    });
  }

  /*function for get informacion of album*/
  getInfoAlbum(id) {
    this._albumDetailservice.getAlbumById(id)
      .subscribe(success => {
        this.album = success.data;
      },
        error => { this.errorMsg = error; });
  }

  onFileChanged(event) {
    if (event.target.files[0] !== undefined) {
      /* validate if image is jpg or png*/
      if (!this.validarImagen(event.target.files[0])) {
        this.file = event.target.files[0];
        this.fileName = event.target.files[0].name;
        //convert to base64
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        /*get image base64*/
        reader.onload = () => {
          this.imageBase64 = reader.result.toString();
        };
      } else {
        this.file = null;
        this.fileName = "";
      }
    }
  }

  /*function para upload image */
  uploadImage(album) {
    const data = {
      name: this.fileName,
      image: this.imageBase64,
      idAlbum: album._id
    }

    //call the function service
    this._albumDetailservice.saveFileImage(data)
      .subscribe(success => {
        /*update the list*/
        this.getInfoAlbum(album._id);
      },
        error => {
          this.errorMsg = error;
        });
  }

  /* function for show form of upload images*/
  changeStateCreate() {
    this.stateSaveImage = true;
  }

  /* function hide form of upload images*/
  cancelStateCreate() {
    this.stateSaveImage = false;
  }

  /*function for validate image*/
  validarImagen(file) {
    const uploadFile = file;
    console.log("inspeccionar el archivo", file.name)

    /* validate if the image is jpg or png*/
    if (!(/\.(jpg|png|jpeg)$/i).test(uploadFile.name)) {
      alert('El archivo a adjuntar no es una imagen');
      return true;
    }
    /* return false if is not a image*/
    return false;
  }

}


