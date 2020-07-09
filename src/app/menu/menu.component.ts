import { Component, OnInit } from '@angular/core';
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


  constructor(
    private dishService : DishService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe(dishes => (this.dishes=dishes));
  }

/* onSelect(dish){
  this.router.navigate([`dishdetail/:${dish.id}`]);
} */

}
