import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-negozio',
  templateUrl: './detail-negozio.page.html',
  styleUrls: ['./detail-negozio.page.scss'],
})
export class DetailNegozioPage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router)  {
    this.route.queryParams.subscribe(params =>{
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }

  ngOnInit() {
  }

}
