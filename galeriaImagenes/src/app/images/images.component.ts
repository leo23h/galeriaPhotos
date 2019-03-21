import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imagesList: any = [];
  error: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private imagesService: ImagesService) { }

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages() {
    this.imagesService.getImageAll()
      .subscribe(
        success => {
          this.imagesList = success;
        },
        error => {
          this.error = error;
        })
  }

}
