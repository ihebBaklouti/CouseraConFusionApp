import { Component, OnInit } from '@angular/core';
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

  constructor(
    private leaderService : LeaderService
  ) { }

  ngOnInit(): void {
    this.leaderService.getleaders()
    .then(leaders => (this.leaders=leaders));
    console.log('leaders is', this.leaders);
    
  }

}
