import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Comment} from '../shared/comment'


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

comment:Comment;
@Input()
dish:Dish;

  constructor() { }

  ngOnInit(): void {
  }


}
