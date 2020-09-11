import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegoziServiceService {
  jsonData: any = [];
  arrayProdotti: any [] = [];
  arrayOfferte: any [] = [];
  arrayOfferteTipo: any[] = [];
  arrayColore: any[] = [];
  negozio: any;
  constructor() { }

   initializaJSONData() {
    this.jsonData = [
      {
        src: '../../../assets/logoNegozi/logo_mediaworld.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Mediaworld',
        persone: '20/70',
        coloreAffollamento: 'verde',
        distanza: '10 mt',
        valutazione: '4,6',
        cel: '0824 348125',
        descrizioneNegozio: 'Media World è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'mediaworld@negozio.com',
        sito: 'www.mediaworld.it',
        prodotti : [
          {
            id: '9960085496796',
            nameProdotto: 'APPLE iPhone 11 128GB Bianco',
            dis: '3',
            prezzo: '700,99',
            descrizione: 'Nuovo sistema a doppia fotocamera con ultra-grandangolo e modalità Notte. Un giorno intero di batteria. Sei nuovi colori e chip A13 Bionic.',
            srcPro: '../../../assets/prodotti/iphone.jpg'
          },
          {
            id: '9960085496795',
            nameProdotto: 'SAMSUNG Galaxy S20 4G Cloud Blue',
            dis: '2',
            prezzo: '899,99',
            descrizione: 'Galaxy S20, Galaxy S20+ e Galaxy S20 Ultra. Gli smartphone che rivoluzioneranno la fotografia con i video in 8K. Il 5G cambia il tuo modo di condividerli.',
            srcPro: '../../../assets/prodotti/s20.jpg'
          },
          {
            id: '9960085496794',
            nameProdotto: 'HUAWEI Matebook D 14',
            dis: '4',
            prezzo: '599,00',
            descrizione: 'MateBook D 14 è alimentato dal Processore AMD Ryzen che accelera e Potenzia le Prestazioni. HUAWEI MateBook D 14 è dotato di un Eccezionale Schermo IP con Bordi Ridotti a soli 4,8 mm. Display da 14. Processore AMD Ryzen 5. SSD da 512 GB.',
            srcPro: '../../../assets/prodotti/matebook.jpg'
          }
        ],
        offerte : [
          {
            breveDescrizione: 'Sottocosto mediaword',
            descrizione: 'Media World è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
            tipo: 'volantino',
            dataInizio: '21-08.2020',
            dataFine: '31-08-2020',
            imgOfferta: '../../../assets/imgOfferte/offerta_mediaworld.jpg'
          }
        ],
        recensione : [{
          valore: '4',
          utente: 'Mario Rossi',
          corpoRecensione: 'Negozio spazioso e rifornito, nel rispetto delle regole anti-covid',
          dataRecensione: 'ieri'
        }]
      },
      {
        src: '../../../assets/logoNegozi/logo_ralph.png',
        srcPos: '../../../assets/posNegozi/pos_geox.jpg',
        name: 'Ralph Lauren',
        persone: '17/45',
        coloreAffollamento: 'giallo',
        distanza: '14 mt',
        valutazione: '4,1',
        cel: '0824 348124',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di abbigliamento numero 1 in Europa',
        email: 'ralphlauren@negozio.com',
        sito: 'www.ralphlauren.it',
        prodotti : [
          {
            id: '9960085496790',
            nameProdotto: 'Maglietta in cotone',
            dis: '10',
            prezzo: '65,00',
            descrizione: 'Realizzata in morbido jersey, questa rivisitazione della maglietta a girocollo è caratterizzata da una linea sagomata ed è stata precedentemente lavata per conferirle l\'aspetto di un capo vissuto',
            srcPro: '../../../assets/prodotti/magliaRalph.jpg'
          },
          {
            id: '9960085496797',
            nameProdotto: 'Cappellino in chino di cotone',
            dis: '2',
            prezzo: '29,99',
            descrizione: 'Con 982 cuciture, il nostro esclusivo pony ricamato dona a questo cappellino da baseball un\'iconica finitura Polo.',
            srcPro: '../../../assets/prodotti/cappellinoRalph.jpg'
          },
          {
            id: '9960085496798',
            nameProdotto: 'Calzoncini da mare',
            dis: '4',
            prezzo: '89,00',
            descrizione: 'Questi calzoncini da mare foderati in rete sono perfetti per passare dalla spiaggia al lungomare in stile sportivo inconfondibilmente Polo.',
            srcPro: '../../../assets/prodotti/costumeRalph.jpg'
          }
        ],
        offerte : [{
          breveDescrizione: 'Sottocosto Ralph Lauren',
          descrizione: 'Acquistando almeno 3 capi, EXTRA - 50% sul tuo totale.\nInoltre fino al 27 Agosto, su ogni tuo acquisto ti regaliamo un CASHBACK del 50% della tua spesa.\nCosa aspetti? Inutile attendere i saldi.... ',
          tipo: 'bomba',
          dataInizio: '22-08-2020',
          dataFine: '27-08-2020',
          imgOfferta: '../../../assets/imgOfferte/offerta_ralphlauren.jpg'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_harmon.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Harmont&Blaine',
        persone: '5/20',
        coloreAffollamento: 'verde',
        distanza: '19 mt',
        valutazione: '4,8',
        cel: '0824 348123',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'harmont@negozio.com',
        sito: 'www.harmont.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_yama.png',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Yamamay',
        persone: '0/13',
        coloreAffollamento: 'verde',
        distanza: '19 mt',
        valutazione: '3,9',
        cel: '0824 348122',
        descrizioneNegozio: 'Yamamay è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'yama@negozio.com',
        sito: 'www.yama.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_tommy.png',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'TOMMY HILFIGER',
        persone: '9/34',
        coloreAffollamento: 'giallo',
        distanza: '22 mt',
        valutazione: '4,3',
        cel: '0824 348118',
        descrizioneNegozio: 'TOMMY HILFIGER è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'tommy@negozio.com',
        sito: 'www.tommy.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/decathlon.png',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'DECATHLON',
        persone: '79/80',
        coloreAffollamento: 'rosso',
        distanza: '50 mt',
        valutazione: '4,6',
        cel: '0824 348117',
        descrizioneNegozio: 'DECATHLON è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'decathlon@negozio.com',
        sito: 'www.decathlon.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_bata.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Bata',
        persone: '20/35',
        coloreAffollamento: 'giallo',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Bata è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'bata@negozio.com',
        sito: 'www.bata.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_mondadori.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Mondadori',
        persone: '20/35',
        coloreAffollamento: 'giallo',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'mondadori@negozio.com',
        sito: 'www.mondadori.it',
        offerte : [{
          breveDescrizione: 'Sottocosto mondadori',
          descrizione: 'Su tutti gli Oscar Mondadori ti aspetta un -25%! Quale sarà il tuo libro sotto l\'ombrellone?',
          tipo: 'volantino',
          dataInizio: 'oggi',
          dataFine: 'domani',
          imgOfferta: '../../../assets/imgOfferte/offerta_mondadori.jpg'
        }],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_calzedonia.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Calzedonia',
        persone: '25/37',
        coloreAffollamento: 'giallo',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'calzedonia@negozio.com',
        sito: 'www.calzedonia.it',
        offerte : [
          {
            breveDescrizione: 'Sottocosto calzedonia',
            descrizione: 'Acquistando almeno 3 capi, EXTRA - 20% sul tuo totale.\nInoltre fino al 27 Agosto, su ogni tuo acquisto ti regaliamo un CASHBACK del 50% della tua spesa.\nCosa aspetti? Inutile attendere i saldi.... ',
            tipo: 'bomba',
            dataInizio: '21-08-2020',
            dataFine: '22-08-2020',
            imgOfferta: '../../../assets/imgOfferte/offerta_calzedonia.jpg'
          }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_carpisa.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Carpisa',
        persone: '20/35',
        coloreAffollamento: 'rosso',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'carpisa@negozio.com',
        sito: 'www.carpisa.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_footlocker.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Footlocker',
        persone: '20/35',
        coloreAffollamento: 'verde',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'footlocker@negozio.com',
        sito: 'www.footlocker.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_geox.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Geox',
        persone: '20/35',
        coloreAffollamento: 'giallo',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'geox@negozio.com',
        sito: 'www.geox.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_inside.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Inside',
        persone: '20/35',
        coloreAffollamento: 'rosso',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'inside@negozio.com',
        sito: 'www.inside.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_motivi.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Motivi',
        persone: '20/35',
        coloreAffollamento: 'giallo',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'motivi@negozio.com',
        sito: 'www.motivi.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_originalmarines.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'OriginalMarines',
        persone: '20/35',
        coloreAffollamento: 'verde',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'originalmarines@negozio.com',
        sito: 'www.originalmarines.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_piazzaitalia.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Piazza italia',
        persone: '20/35',
        coloreAffollamento: 'verde',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'piazzaitalia@negozio.com',
        sito: 'www.piazzaitalia.it',
        offerte : [{
          breveDescrizione: 'Sottocosto super',
          descrizione: 'In PIAZZA ITALIA i SALDI arrivano alla grande con sconti FINO AL 70%. Approfitta dei saldi sulla collezione primavera / estate uomo, donna e bambino. Cosa aspetti… corri nel tuo store PIAZZA ITALIA preferito.',
          tipo: 'volantino',
          dataInizio: '25-08-2020',
          dataFine: '07-09-2020',
          imgOfferta: '../../../assets/imgOfferte/offerta_piazzaitalia.jpg'
        }
        ],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_tezenis.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Tezenis',
        persone: '20/35',
        coloreAffollamento: 'verde',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'tezenis@negozio.com',
        sito: 'www.tezenis.it',
        offerte : [],
        recensione : []
      },
      {
        src: '../../../assets/logoNegozi/logo_thun.jpg',
        srcPos: '../../../assets/posNegozi/pos_mediaworld.jpg',
        name: 'Thun',
        persone: '20/35',
        coloreAffollamento: 'rosso',
        distanza: '40 mt',
        valutazione: '4,0',
        cel: '0824 348112',
        descrizioneNegozio: 'Ralph Lauren è il megastore specializzato di elettronica, informatica, tecnologia ed elettrodomestici numero 1 in Europa',
        email: 'thun@negozio.com',
        sito: 'www.thun.it',
        offerte : [{
          breveDescrizione: 'Sottocosto thun',
          descrizione: 'Acquistando almeno 3 pezzi, il meno caro te lo regaliamo noi',
          tipo: 'lampo',
          dataInizio: '23-08-2020 12:15',
          dataFine: '23-08-2020 14:15',
          imgOfferta: '../../../assets/imgOfferte/offerta_thun.jpg'
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
  getProdottiByIDAndNegozio(name: string, id: string){
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].name === name){
        this.negozio = this.jsonData[i];
      }
    }
    console.log(this.negozio.name);
    for (let i = 0; i !== this.negozio.prodotti.length; i++){
      if (this.negozio.prodotti[i].id === id) {
        return this.negozio.prodotti[i];
      }
    }
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
      if (this.jsonData[i].name === ev.name){
        console.log('trovato');
        return this.jsonData[i];
      }
    }
  }
  getNegozioByNameString(ev: string){
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].name === ev){
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
  getNegozioByColorAffollamento(coloreAssembramento){
    this.arrayColore = [];
    for (let i = 0; i !== this.jsonData.length; i++){
      if (this.jsonData[i].coloreAffollamento === 'verde'){
        this.arrayColore.push(this.jsonData[i]);
      }
    }
    if (coloreAssembramento === 'giallo' || coloreAssembramento === 'rosso') {
      for (let i = 0; i !== this.jsonData.length; i++) {
        if (this.jsonData[i].coloreAffollamento === 'giallo') {
          this.arrayColore.push(this.jsonData[i]);
        }
      }
    }
    if (coloreAssembramento === 'rosso') {
      for (let i = 0; i !== this.jsonData.length; i++) {
        if (this.jsonData[i].coloreAffollamento === 'rosso') {
          this.arrayColore.push(this.jsonData[i]);
        }
      }
    }
    return this.arrayColore;
  }


}
