import { Injectable } from '@angular/core';
import {throwError} from 'rxjs' ;
import {HttpErrorResponse} from '@angular/common/http';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor() { }


  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {  //logic error
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText}`;
    }

    return throwError(errMsg);
  }
}


