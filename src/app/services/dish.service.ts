import { Injectable } from '@angular/core';
import {Dish} from "../shared/Dish";
import { promise } from 'protractor';
import { resolve } from 'url';
import {Observable,of} from 'rxjs';
import {delay, map,catchError} from 'rxjs/operators';
import {baseUrl} from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpErrorService} from '../services/http-error.service';





@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,private errService:HttpErrorService) { }

  /*getDishes(): Promise <Dish[]>
  {
    return new Promise(resolve => { setTimeout(()=>resolve(DISHES),2000)
    
                       });

  }*/

// promise deliver only one date however observables use streams (many data)

getDishes(): Observable<Dish[]> {
 // return of(DISHES).pipe(delay(2000));
 return this.http.get<Dish[]>(baseUrl + 'dishes').pipe(catchError(this.errService.handleError));

}

  
  /*getDish(id: string): Promise <Dish>
   {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  } */
  getDish(id: string): Observable <Dish>
  {
    //return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    return this.http.get<Dish>(baseUrl + 'dishes/'+id).pipe(catchError(this.errService.handleError));; //items of array

  }


  /*getFeaturedDish():Promise <Dish>
  {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }*/

  getFeaturedDish(): Observable<Dish> {
    //return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    return this.http.get<Dish[]>(baseUrl+'dishes?featured=true').pipe(map((dishes)=>dishes[0])).
    pipe(catchError(this.errService.handleError));;
  }
  
  getDishIds(): Observable<string[] > {
   // return of(DISHES.map(dish => dish.id ));
   return this.http.get<Dish[]>(baseUrl+'dishes/').pipe(map((dishes=>dishes.map(dish=>dish.id))))
   .    pipe(catchError(this.errService.handleError));;
   ;

  }

  updateDish(dish:Dish): Observable<Dish>
  {
    let httpHeader={
      headers: new HttpHeaders({'content-type':'application/json'})
    }
    return this.http.put<Dish>(baseUrl+ 'dishes/'+dish.id,dish,httpHeader)
    .pipe(catchError(this.errService.handleError));
  }

}
