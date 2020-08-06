import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-negozio-product-info',
  templateUrl: './detail-negozio-product-info.page.html',
  styleUrls: ['./detail-negozio-product-info.page.scss'],
})
export class DetailNegozioProductInfoPage implements OnInit {

  data: any;
  constructor(private route: ActivatedRoute, private router: Router)  {
    this.initializaJSONData();
  }
  ngOnInit() {
  }
  initializaJSONData(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }

}
