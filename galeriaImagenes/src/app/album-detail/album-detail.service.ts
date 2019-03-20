import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailService {

  private _urlBase: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //function for get album by id
  getAlbumById(id) {
    return this.http.get<any>(this._urlBase + '/album/' + id)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //function for save image for album
  saveFileImage(data) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<any>(this._urlBase + '/album/image/', data, { headers: header })
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //function for get album by id
  getInfoImagesByIdAlbum(id) {
    return this.http.get<any>(this._urlBase + '/album/image/' + id)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Error en la peticion")
  }

}
