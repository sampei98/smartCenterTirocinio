import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-detail-negozio-product',
  templateUrl: './detail-negozio-product.page.html',
  styleUrls: ['./detail-negozio-product.page.scss'],
})
export class DetailNegozioProductPage implements OnInit {
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

  FilterJSONData(ev: any) {
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.data.prodotti = this.data.prodotti.filter((item) => {
        return (item.nameProdotto.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }


  intemClicked(item: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['detail-negozio-product-info'], navigationExtras);
  }
}
