import { Component, OnInit,Inject} from '@angular/core';
import { Dish } from '../shared/Dish';
import {DishService} from '../services/dish.service';
import {baseUrl} from '../shared/baseurl';









@Component({

  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit
 {
  dishes: Dish[];
  url:string;
  err:string;
  
  
  
 // selectedDish: Dish;


constructor(private dishservice:DishService) { }

  ngOnInit()
   {
    //this.dishservice.getDishes().then(dishes=>this.dishes=dishes);
    this.url=baseUrl;
    this.dishservice.getDishes().subscribe(dishes => this.dishes = dishes,(err)=>this.err=<any>err);
    console.log(this.dishes);
  }

  
  onSelect(dish: Dish) {
    //this.selectedDish = dish;

}
 }
