import { Component, OnInit, Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import { from } from 'rxjs';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
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
