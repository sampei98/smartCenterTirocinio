import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { BarcodeScanner , BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scontrino',
  templateUrl: './scontrino.page.html',
  styleUrls: ['./scontrino.page.scss'],
})
export class ScontrinoPage implements OnInit {
  scanData: {};
  punti: string;
  datiLetti: string;
  formatoLetto: string;
  successMessage: string;
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    this.punti = '230';
  }

  ngOnInit() {
  }

  scan(){
    this.options = {
      prompt : 'Scan your barcode '
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
      this.datiLetti = barcodeData.text;
      this.formatoLetto = barcodeData.format;
      this.punti = '280';
      this.successMessage = 'Scontrino caricato con successo, ti sono stati caricati 50 punti!';
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

}
