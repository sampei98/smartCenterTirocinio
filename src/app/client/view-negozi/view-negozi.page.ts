import {Component, Injectable, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {NegoziServiceService} from '../../services/negozi-service.service';

@Component({
  selector: 'app-view-negozi',
  templateUrl: './view-negozi.page.html',
  styleUrls: ['./view-negozi.page.scss'],
})
export class ViewNegoziPage implements OnInit {
  jsonData: any = [];

  constructor(private router: Router, private myService: NegoziServiceService) {
    this.jsonData = myService.initializaJSONData();
  }

  ngOnInit() {
  }

  FilterJSONData(ev: any) {
    this.jsonData =  this.myService.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }


  intemClicked(item: any) {
    const navigationExtras: NavigationExtras = {
      queryParams : {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['detail-negozio'], navigationExtras);
  }
}
