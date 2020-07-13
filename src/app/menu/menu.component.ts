import { Component, OnInit, Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import { from } from 'rxjs';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

dishes:Dish[];
errMess: string;


  constructor(
    private dishService : DishService,
    private router : Router,
    @Inject('baseURL') private baseURL
  ) { }

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes=dishes,
      errmess => this.errMess = <any>errmess);
  }

/* onSelect(dish){
  this.router.navigate([`dishdetail/:${dish.id}`]);
} */

}
