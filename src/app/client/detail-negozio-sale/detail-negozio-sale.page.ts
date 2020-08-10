import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-detail-negozio-sale',
  templateUrl: './detail-negozio-sale.page.html',
  styleUrls: ['./detail-negozio-sale.page.scss'],
})
export class DetailNegozioSalePage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router)  {
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }

  ngOnInit() {
  }

  intemClicked(item: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['detail-sale'], navigationExtras);
  }
}
