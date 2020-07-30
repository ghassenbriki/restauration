import { Injectable } from '@angular/core';
import {DISHES} from "../shared/Dishes";
import {Dish} from "../shared/Dish";
import { promise } from 'protractor';
import { resolve } from 'url';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise <Dish[]>
  {
    return new Promise(resolve => { setTimeout(()=>resolve(DISHES),2000)
    
                       });

  }
  
  getDish(id: string): Promise <Dish>
   {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  } 

  getFeaturedDish():Promise <Dish>
  {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }
}
