import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {NegozioComponent} from '../../components/negozio/negozio.component';

@Component({
  selector: 'app-search-commerciante',
  templateUrl: './search-commerciante.page.html',
  styleUrls: ['./search-commerciante.page.scss'],
})
export class SearchCommerciantePage implements OnInit {
  negozio: any;
  negozioClone: any;
  constructor(private route: ActivatedRoute, private router: Router, private myService: NegoziServiceService)  {
    myService.initializaJSONData();
    this.negozio = NegozioComponent.negozio;
  }
  ngOnInit() {
  }


  intemClicked(item: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);
  }

  FilterJSONData(ev: any) {
    this.myService.initializaJSONData();
    this.negozio = this.myService.getNegozioByNameString(this.negozio.name);
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.negozio.prodotti = this.negozio.prodotti.filter((item) => {
        return (item.nameProdotto.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
