import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 5;
  vertical = false;
  tickInterval = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.tickInterval; 
      console.log(this.tickInterval);
    }
    return 0;
  }
}
