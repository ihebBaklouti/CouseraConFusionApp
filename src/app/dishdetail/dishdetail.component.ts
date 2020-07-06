import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Comment} from '../shared/comment';
import { DishService } from '../services/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

comment:Comment;
dish:Dish;

  constructor(
    private activateRoute : ActivatedRoute,
    private dishService : DishService,
    private location : Location
  ) { }

  ngOnInit(): void {
  const id=this.activateRoute.snapshot.paramMap.get('id');
  console.log('my id is',id);
  this.dishService.getDish(id)
  .then(dish => (this.dish=dish));
  console.log('my dish is',this.dish);
  
  }

  goBack(): void {
    this.location.back();
  }


}
