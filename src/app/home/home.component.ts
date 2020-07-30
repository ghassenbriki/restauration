import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/Dish';
import {Promotion} from '../shared/Promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion

  constructor(private dishservice:DishService, private promotionservice:PromotionService) { }

  ngOnInit() {
   this.dishservice.getFeaturedDish().then(dish=>this.dish=dish);
   this.promotionservice.getFeaturedPromotion().then(promotion=>this.promotion=promotion);;
  }

}
