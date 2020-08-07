import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.page.html',
  styleUrls: ['./find-car.page.scss'],
})
export class FindCarPage implements OnInit {
  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
