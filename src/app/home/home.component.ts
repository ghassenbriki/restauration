import { Component, OnInit ,Inject} from '@angular/core';
import {Dish} from '../shared/Dish';
import {Promotion} from '../shared/Promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import {baseUrl} from '../shared/baseurl';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion
  url:string;

  constructor(private dishservice:DishService, private promotionservice:PromotionService) { }

  ngOnInit() {
    this.url=baseUrl;
   this.dishservice.getFeaturedDish().subscribe(dish=>this.dish=dish);
   this.promotionservice.getFeaturedPromotion().subscribe(promotion=>this.promotion=promotion);;
  }

}
