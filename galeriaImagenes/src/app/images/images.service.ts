import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private _urlBase: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  /*function for get album by id*/
  getImageAll() {
    return this.http.get<any>(this._urlBase + '/album/images/all')
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
