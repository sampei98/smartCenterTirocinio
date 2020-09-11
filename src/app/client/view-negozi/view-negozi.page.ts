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
  personeArray: any = [];
  numberActual: number;
  numberTot: number;

  constructor(private router: Router, private myService: NegoziServiceService) {
    this.jsonData = myService.initializaJSONData();
  }

  ngOnInit() {
    setInterval(() => this.modificaNumPersone(), 3000);
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

  visualizzaAssembramenti(coloreAssembramento){
    this.jsonData = this.myService.getNegozioByColorAffollamento(coloreAssembramento);
  }

  visualizzaDistanza(){
    this.jsonData = this.myService.initializaJSONData();
  }

  modificaNumPersone(){
    for (let i = 0; i !== this.jsonData.length; i++){
      this.personeArray = this.jsonData[i].persone.split('/');
      this.numberActual = Number(this.personeArray[0]);
      this.numberTot = Number(this.personeArray[1]);

      this.numberActual = this.numberActual + Math.floor(Math.random() * 3) - 1;
      if (this.numberActual < 0){
        this.numberActual = 0;
      }
      if (this.numberActual > this.numberTot){
        this.numberActual = this.numberTot;
      }
      if ((this.numberActual / this.numberTot) < 0.3){
        this.jsonData[i].coloreAffollamento = 'verde';
      } else if ((this.numberActual / this.numberTot) < 0.6){
        this.jsonData[i].coloreAffollamento = 'giallo';
      } else {
        this.jsonData[i].coloreAffollamento = 'rosso';
      }

      this.jsonData[i].persone = this.numberActual + '/' + this.personeArray[1];
    }
  }
}
