import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {NegozioComponent} from '../../components/negozio/negozio.component';

@Component({
  selector: 'app-home-nav-commerciante',
  templateUrl: './home-nav-commerciante.page.html',
  styleUrls: ['./home-nav-commerciante.page.scss'],
})
export class HomeNavCommerciantePage implements OnInit {
  negozio: any;
  constructor(private route: ActivatedRoute, private router: Router, private myService: NegoziServiceService)  {
    myService.initializaJSONData();
    this.negozio = NegozioComponent.negozio;
  }
  ngOnInit() {
  }

}
