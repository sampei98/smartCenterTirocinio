import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-detail-negozio',
  templateUrl: './detail-negozio.page.html',
  styleUrls: ['./detail-negozio.page.scss'],
})
export class DetailNegozioPage implements OnInit {
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

  showProduct() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data)
      }
    };
    this.router.navigate(['detail-negozio-product'], navigationExtras);
  }

  showOfferte() {
    console.log('offerte');
  }

  showRecensioni() {
    alert('ciao');
    console.log('recensioni');
  }
}
