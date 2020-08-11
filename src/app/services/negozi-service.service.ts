import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegoziServiceService {
  jsonData: any = [];
  arrayProdotti: any [] = [];
  arrayOfferte: any [] = [];
  arrayOfferteTipo: any[] = [];
  negozio: any;
  constructor() { }

   initializaJSONData() {
    this.jsonData = [
      {
        src: '../../../assets/logoNegozi/logo_mediaworld.jpg',
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
        ],
        offerte : [
          {
            breveDescrizione: 'Sottocosto mediaword',
            descrizione: 'sono la descrizione lunga',
            tipo: 'volantino',
            dataInizio: 'oggi',
            dataFine: 'domani'
          },
          {
            breveDescrizione: 'Sottocosto mediaword',
            descrizione: 'sono la descrizione lunga',
            tipo: 'bomba',
            dataInizio: 'oggi',
            dataFine: 'domani'
          }
        ],
        recensione : [{
          valore: '4',
          utente: 'Maerio Inglese',
          corpoRecensione: ' ahahahhahhahhaha',
          dataRecensione: 'data'
        }]
      },
      {
        src: '../../../assets/logoNegozi/logo_ralph.png',
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
        ],
        offerte : [{
          breveDescrizione: 'Sottocosto mediaword',
          descrizione: 'sono la descrizione lunga',
          tipo: 'bomba',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }, {
          breveDescrizione: 'Sottocosto mediaword',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_harmon.jpg',
        name: 'Harmont&Blaine',
        persone: '5/20',
        distanza: '19 mt',
        valutazione: '4,8',
        cel: '0824 348123',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_yama.png',
        name: 'Yamamay',
        persone: '0/13',
        distanza: '19 mt',
        valutazione: '3,9',
        cel: '0824 348122',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_tommy.png',
        name: 'TOMMY HILFIGER',
        persone: '9/34',
        distanza: '22 mt',
        valutazione: '4,3',
        cel: '0824 348118',
        offerte : [
          {
            breveDescrizione: 'Sottocosto tommy',
            descrizione: 'sono la descrizione lunga',
            tipo: 'lampo',
            dataInizio: 'oggi',
            dataFine: 'domani'
          }, {
            breveDescrizione: 'Sottocosto mediaword',
            descrizione: 'sono la descrizione lunga',
            tipo: 'volantino',
            dataInizio: 'oggi',
            dataFine: 'domani'
          }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/decathlon.png',
        name: 'DECATHLON',
        persone: '79/80',
        distanza: '50 mt',
        valutazione: '4,6',
        cel: '0824 348117',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_bata.jpg',
        name: 'Bata',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto mediaword',
          descrizione: 'sono la descrizione lunga',
          tipo: 'volantino',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }, {
          breveDescrizione: 'Sottocosto mediaword',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_mondadori.jpg',
        name: 'Mondadori',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto mondadori',
          descrizione: 'sono la descrizione lunga',
          tipo: 'volantino',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_calzedonia.jpg',
        name: 'Calzedonia',
        persone: '25/37',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto calzedonia',
          descrizione: 'sono la descrizione lunga',
          tipo: 'bomba',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }, {
          breveDescrizione: 'Sottocosto mediaword',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_carpisa.jpg',
        name: 'Carpisa',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto carpisa',
          descrizione: 'sono la descrizione lunga',
          tipo: 'volantino',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_footlocker.jpg',
        name: 'Footlocker',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto footlocker',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_geox.jpg',
        name: 'Geox',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto geox',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_inside.jpg',
        name: 'Inside',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto inside',
          descrizione: 'sono la descrizione lunga',
          tipo: 'bomba',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_motivi.jpg',
        name: 'Motivi',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto motivi',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_originalmarines.jpg',
        name: 'OriginalMarines',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_piazzaitalia.jpg',
        name: 'Piazza italia',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto super',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_tezenis.jpg',
        name: 'Tezenis',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto tezenis',
          descrizione: 'sono la descrizione lunga',
          tipo: 'volantino',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_thun.jpg',
        name: 'Thun',
        persone: '20/35',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        offerte : [{
          breveDescrizione: 'Sottocosto thun',
          descrizione: 'sono la descrizione lunga',
          tipo: 'lampo',
          dataInizio: 'oggi',
          dataFine: 'domani'
        }
        ],
        recensione : []
      }
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
  getOfferte() {
    this.arrayOfferte = [];
    const r = this.jsonData.filter((elem) => {
      return elem.offerte;
    });
    for (let i = 0; i !== r.length; i++){
      for (let j = 0 ; j !== r[i].offerte.length; j++){
        this.arrayOfferte.push(r[i].offerte[j]);
      }
    }
    return this.arrayOfferte;
  }
  getOfferteByTipo(ev: string) {
    this.arrayOfferteTipo = [];
    const r = this.jsonData.filter((elem) => {
      return elem.offerte;
    });
    for (let i = 0; i !== r.length; i++){
      for (let j = 0 ; j !== r[i].offerte.length; j++){
        if (r[i].offerte[j].tipo === ev){
          this.arrayOfferteTipo.push(r[i].offerte[j]);
        }
      }
    }
    return this.arrayOfferteTipo;
  }
  getNegozioByOfferta(ev: any){
    const r = this.jsonData.filter((elem) => {
      return elem.offerte;
    });
    for (let i = 0; i !== r.length; i++){
      for (let j = 0 ; j !== r[i].offerte.length; j++){
        if (r[i].offerte[j] === ev){
          return r[i];
        }
      }
    }
  }
  getNegozioByProdotto(ev: any){
    const r = this.jsonData.filter((elem) => {
      return elem.prodotti;
    });
    for (let i = 0; i !== r.length; i++){
      for (let j = 0 ; j !== r[i].prodotti.length; j++){
        if (r[i].prodotti[j] === ev){
          return r[i];
        }
      }
    }
  }
  getNegozioByName(ev: any){
    for (let i = 0; i !== this.jsonData.length; i++){
      console.log(this.jsonData[i].name);
      console.log(ev.name);
      if (this.jsonData[i].name === ev.name){
        return this.jsonData[i];
      }
    }
  }
  getNameNegozio(ev: any){
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].name === ev.name){
        return this.jsonData[i].name;
      }
    }
  }
  getImgNegozio(ev: any){
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].src === ev.src){
        return this.jsonData[i].src;
      }
    }
  }
  addRecensione(nameNegozio: any, val: string, ut: any, corpo: any, data: any){
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].name === nameNegozio){
       this.jsonData[i].recensione.push({valore: val, utente: ut, corpoRecensione: corpo, dataRecensione: data});
       return this.jsonData[i];
      }
    }

  }


}
