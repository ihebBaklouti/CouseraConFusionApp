import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

leader : Leader;  
leaders : Leader [];
errMess: string;


  constructor(
    private leaderService : LeaderService,
    @Inject('baseURL') private baseURL
  ) { }

  ngOnInit(): void {
    this.leaderService.getleaders()
    .subscribe(leaders => (this.leaders=leaders),
    errmess => this.errMess = <any>errmess);
    
  }

}
