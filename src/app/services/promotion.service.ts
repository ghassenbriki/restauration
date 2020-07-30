import { Injectable } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<Promotion> {
    return  Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise((resolve)=>{setTimeout(()=>resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),2000)
                                  });
  }
}
