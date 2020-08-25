import { Component, OnInit, Input,ViewChild} from '@angular/core';
import { Dish } from '../shared/dish';
import {DishService} from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { resolve } from 'url';
import {switchMap} from 'rxjs/operators';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import{baseUrl} from '../shared/baseurl';





@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  //@Input() dish:Dish;
  dish:Dish;
  dishIds: string[];
  prev: string;
  next: string;
  ID:string;
  f:FormGroup;
  value : Observable <number>;
  url:string;
  err :string;
  dishcopy:Dish;
  
  


  
 
  constructor(private dishservice:DishService,private route: ActivatedRoute, private location: Location,
    private fb:FormBuilder) { this.createForm(); }

  ngOnInit()
   {
 
    /*const id =this.route.snapshot.params['id'];    // + convert string to a number
    this.dishservice.getDish(id.toString()).subscribe(resolve=>this.dish=resolve); //resolve is the dish to return
    */
    

  
    this.url=baseUrl;
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
   
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish ;this.setPrevNext(dish.id);this.dishcopy=dish},(err)=> {this.err=<any>err});
    // we create an other observable by using switchmap  the new observable is service.getDish
    /* after each clic prev or next the service will fetch the new dish who is updated and the view updated also
     */ 
  
    //console.log(this.dishesIDs);
    this.value = this.f.controls.rating.valueChanges;
   



     }
    
     


   
   goBack(): void 
   {
    this.location.back();
   }

   setPrevNext(dishId: string)
    {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  createForm()
  {
      this.f=this.fb.group(
        {name:['',[Validators.minLength(3)]],
         rating :0,
         comment :['']
        }
      )
  }
  onSubmit() 
  {

    console.log(this.dish);
    console.log(this.dishcopy)

    console.log(this.f.value);
    var d=new Date(); 
    var dd=d.toString();
    const obj={rating:this.f.controls['rating'].value,comment:this.f.controls['comment'].value,
    author:this.f.controls['name'].value,date:dd};
    console.log(obj)
    
    this.dishcopy.comments.push(obj);
   
    this.dishservice.updateDish(this.dishcopy)
      .subscribe(dish => {
        this.dish = dish; this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.err = <any>errmess; });
    
  
    this.f.reset({name:'',rating:0,comment:''});
    
    
    //this.feedbackFormDirective.resetForm(); assure the reset of the form



    

  
  }

}

  

 


