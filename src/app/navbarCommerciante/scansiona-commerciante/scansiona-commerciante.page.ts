import { Component, OnInit } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {AlertController, NavController} from '@ionic/angular';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {NegozioComponent} from '../../components/negozio/negozio.component';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-scansiona-commerciante',
  templateUrl: './scansiona-commerciante.page.html',
  styleUrls: ['./scansiona-commerciante.page.scss'],
})
export class ScansionaCommerciantePage implements OnInit {
  scanData: {};
  datiLetti: string;
  formatoLetto: string;
  successMessage: string;
  options: BarcodeScannerOptions;
  negozio: any;
  prodotto: any;
  codiceProdotto: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public alertController: AlertController,
              private myService: NegoziServiceService) {
    this.negozio = NegozioComponent.negozio;
    myService.initializaJSONData();
  }

  ngOnInit() {
  }

  scan(){
    this.options = {
      prompt : 'Scan your barcode '
    };
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
      this.datiLetti = barcodeData.text;
      this.formatoLetto = barcodeData.format;
      this.prodotto = this.myService.getProdottiByIDAndNegozio(this.negozio.name, this.datiLetti);
      if (this.prodotto != undefined){
        const navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(this.prodotto)
          }
        };
        this.router.navigate(['product-detail'], navigationExtras);
      }else {
        this.successMessage = 'Prodotto non trovato';
      }
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  inserisciCodice() {
    this.prodotto = this.myService.getProdottiByIDAndNegozio(this.negozio.name, this.codiceProdotto);
    if (this.prodotto != undefined){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.prodotto)
        }
      };
      this.router.navigate(['product-detail'], navigationExtras);
    }else {
      this.successMessage = 'Prodotto non trovato';
    }
  }
}
