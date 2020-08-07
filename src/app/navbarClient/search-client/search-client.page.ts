import { Component, OnInit } from '@angular/core';
import {ViewNegoziPage} from '../../client/view-negozi/view-negozi.page';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.page.html',
  styleUrls: ['./search-client.page.scss'],
})
export class SearchClientPage implements OnInit {

 prod: any[];

  constructor(private myService: NegoziServiceService, private route: ActivatedRoute, private router: Router) {
      this.prod = myService.initializaJSONData();
      this.prod = myService.getProdotti();
  }

  ngOnInit() {
  }

    FilterJSONData(ev: any) {
        this.prod = [];
        this.prod = this.myService.getProdotti();
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.prod = this.prod.filter((item) => {
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
    getNameNegozioByProduct(item: any){
        return this.myService.getNameNegozio(this.myService.getNegozioByProdotto(item));
    }
}
