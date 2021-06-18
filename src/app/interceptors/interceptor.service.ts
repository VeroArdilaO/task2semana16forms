import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

      const headers = new HttpHeaders ({
        'name': 'valor BeeSoftLabs'
      });

      const reqClone = req.clone ({
        headers
      });

      return next.handle(reqClone).pipe(
        catchError(this.manejarError)
      )

  }
  
  manejarError(error: HttpErrorResponse){
    console.log('Sucedio un error')
    console.log('Registrado en el log file')
    console.warn(error);
    return throwError('Error personalizado')
  }
  
}
