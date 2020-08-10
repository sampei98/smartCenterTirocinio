import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {NegoziServiceService} from '../../services/negozi-service.service';

@Component({
  selector: 'app-detail-negozio-voto',
  templateUrl: './detail-negozio-voto.page.html',
  styleUrls: ['./detail-negozio-voto.page.scss'],
})
export class DetailNegozioVotoPage implements OnInit {

  data: any;
  valoreRecensione: string;
  testoRecensione: string;

  constructor(private route: ActivatedRoute, private router: Router, private myService: NegoziServiceService)  {
    this.initializaJSONData();
  }
  initializaJSONData(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }
  ngOnInit() {
  }
  lasciaRecensione() {
    console.log(this.valoreRecensione);
    console.log(this.testoRecensione);
    this.data = this.myService.addRecensione(this.data.name, this.valoreRecensione, 'tu', this.testoRecensione, 'oggi');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data)
      }
    };
    this.router.navigate(['detail-negozio-voto'], navigationExtras);
  }
}
