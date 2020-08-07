import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegoziServiceService {
  jsonData: any = [];
  arrayProdotti: any [] = [];
  constructor() { }

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
        cel: '0824 348124',
        prodotti : [
          {
            nameProdotto: 'Maglietta in cotone',
            dis: '10',
            prezzo: '65,00',
            descrizione: 'Realizzata in morbido jersey, questa rivisitazione della maglietta a girocollo è caratterizzata da una linea sagomata ed è stata precedentemente lavata per conferirle l\'aspetto di un capo vissuto',
            srcPro: '../../../assets/prodotti/magliaRalph.jpg'
          },
          {
            nameProdotto: 'Cappellino in chino di cotone',
            dis: '2',
            prezzo: '29,99',
            descrizione: 'Con 982 cuciture, il nostro esclusivo pony ricamato dona a questo cappellino da baseball un\'iconica finitura Polo.',
            srcPro: '../../../assets/prodotti/cappellinoRalph.jpg'
          },
          {
            nameProdotto: 'Calzoncini da mare',
            dis: '4',
            prezzo: '89,00',
            descrizione: 'Questi calzoncini da mare foderati in rete sono perfetti per passare dalla spiaggia al lungomare in stile sportivo inconfondibilmente Polo.',
            srcPro: '../../../assets/prodotti/costumeRalph.jpg'
          }
        ]
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
    return this.jsonData;
  }
  getProdotti() {
    this.arrayProdotti = [];
    const r = this.jsonData.filter((elem) => {
      return elem.prodotti;
    });
    for (let i = 0; i !== r.length; i++){
      for (let j = 0 ; j !== r[i].prodotti.length; j++){
        this.arrayProdotti.push(r[i].prodotti[j]);
      }
    }
    return this.arrayProdotti;


  }
}
