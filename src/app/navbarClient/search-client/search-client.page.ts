import { Component, OnInit } from '@angular/core';
import {ViewNegoziPage} from '../../client/view-negozi/view-negozi.page';
import {NegoziServiceService} from '../../services/negozi-service.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.page.html',
  styleUrls: ['./search-client.page.scss'],
})
export class SearchClientPage implements OnInit {

 prod: any[];

  constructor(private myService: NegoziServiceService) {
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
}
