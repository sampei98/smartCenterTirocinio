import { Component, OnInit } from '@angular/core';
import {NegozioComponent} from '../../components/negozio/negozio.component';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-crea-offerta',
  templateUrl: './crea-offerta.page.html',
  styleUrls: ['./crea-offerta.page.scss'],
})
export class CreaOffertaPage implements OnInit {
  negozio: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private myService: NegoziServiceService) {
    myService.initializaJSONData();
    this.negozio = NegozioComponent.negozio;
  }

  ngOnInit() {
  }
  selezionaOfferta(tipo: string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tipo)
      }
    };
    this.router.navigate(['crea-offerta-form'], navigationExtras);
  }

}
