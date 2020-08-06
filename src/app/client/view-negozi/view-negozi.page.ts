import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-view-negozi',
  templateUrl: './view-negozi.page.html',
  styleUrls: ['./view-negozi.page.scss'],
})
export class ViewNegoziPage implements OnInit {
  jsonData: any = [];

  constructor(private router: Router) {
    this.initializaJSONData();
  }

  ngOnInit() {
  }

  FilterJSONData(ev: any) {
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  // @ts-ignore
  initializaJSONData() {
    this.jsonData = [
      {
        src: '../../../assets/logoNegozi/mediaWorld.png',
        name: 'Mediaworld',
        persone: '12/70',
        distanza: '10 mt',
        valutazione: '4,6',
        cel: '0824 348125',
        prodotti : [
            {
          nameProdotto: 'APPLE iPhone 11 128GB Bianco',
          dis: 'ipnhon',
          prezzo: '700,99',
          descrizione: 'aaaaaa',
          srcPro: '../../../assets/prodotti/iphone.jpg'
        },
          {
            nameProdotto: 'SAMSUNG Galaxy S20 4G Cloud Blue',
            dis: '2',
            prezzo: '899,99',
            descrizione: 'bbbbbbb',
            srcPro: '../../../assets/prodotti/s20.jpg'
          },
          {
            nameProdotto: 'HUAWEI Matebook D 14',
            dis: '4',
            prezzo: '599,00',
            descrizione: 'ccc',
            srcPro: '../../../assets/prodotti/matebook.jpg'
          }
        ]
      },
      {
        src: '../../../assets/logoNegozi/ralph.png',
        name: 'Ralph Lauren',
        persone: '17/45',
        distanza: '14 mt',
        valutazione: '4,1',
        cel: '0824 348124'
      },
      {
        src: '../../../assets/logoNegozi/harmont.png',
        name: 'Harmont&Blaine',
        persone: '5/20',
        distanza: '19 mt',
        valutazione: '4,8',
        cel: '0824 348123'
      },
      {
        src: '../../../assets/logoNegozi/yama.jpg',
        name: 'Yamamay',
        persone: '0/13',
        distanza: '19 mt',
        valutazione: '3,9',
        cel: '0824 348122'
      },
      {
        src: '../../../assets/logoNegozi/tommy.png',
        name: 'TOMMY HILFIGER',
        persone: '9/34',
        distanza: '22 mt',
        valutazione: '4,3',
        cel: '0824 348118'
      },
      {
        src: '../../../assets/logoNegozi/decathlon.png',
        name: 'DECATHLON',
        persone: '79/80',
        distanza: '50 mt',
        valutazione: '4,6',
        cel: '0824 348117'
      },
      {
        src: '../../../assets/logoNegozi/bata.png',
        name: 'Bata',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112'
      },
    ];
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
