import { Component, OnInit } from '@angular/core';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-sale-client',
  templateUrl: './sale-client.page.html',
  styleUrls: ['./sale-client.page.scss'],
})
export class SaleClientPage implements OnInit {
  off: any[];

  constructor(private myService: NegoziServiceService, private route: ActivatedRoute, private router: Router) {
    this.off = myService.initializaJSONData();
    this.off = myService.getOfferte();
  }
  ngOnInit() {
  }

  getNameNegozio(ev: any){
    return this.myService.getNameNegozio(this.myService.getNegozioByOfferta(ev));
  }
  getImgNegozio(ev: any){
    return this.myService.getImgNegozio(this.myService.getNegozioByOfferta(ev));
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
