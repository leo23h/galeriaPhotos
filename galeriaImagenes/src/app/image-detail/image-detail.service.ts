import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageDetailService {

  private _urlBase: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  /*function for get album by id*/
  getImageById(id) {
    return this.http.get<any>(this._urlBase + '/album/image/' + id)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  /*function for get album by id*/
  deleteImage(idAlbum, idImage) {
    return this.http.delete<any>(this._urlBase + '/album/image/'+idAlbum+'/'+ idImage)
    .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  /*function capture error*/
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Error en la peticion")
  }

}
