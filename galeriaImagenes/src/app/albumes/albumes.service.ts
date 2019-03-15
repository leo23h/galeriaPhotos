import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  private _urlBase: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAlbum(): Observable<any> {
    return this.http.get<any>(this._urlBase + '/album')
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  postAlbum(name: string): Observable<any> {

    return this.http.get<any>(this._urlBase + '/album')
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Error en la peticion")
  }

}
