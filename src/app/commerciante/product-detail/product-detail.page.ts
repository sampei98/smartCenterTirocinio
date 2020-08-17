import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  prodotto: any;
  constructor(private route: ActivatedRoute, private router: Router)  {
    this.initializaJSONData();
  }
  ngOnInit() {
  }
  initializaJSONData(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.prodotto = JSON.parse(params.special) ;
      }
    });
  }
}
