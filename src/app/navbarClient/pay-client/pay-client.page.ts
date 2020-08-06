import { Component, OnInit } from '@angular/core';
import { BarcodeScanner , BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import {NavController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-pay-client',
  templateUrl: './pay-client.page.html',
  styleUrls: ['./pay-client.page.scss'],
})
export class PayClientPage implements OnInit {
  scanData: {};
  datiLetti: string;
  formatoLetto: string;
  successMessage: string;
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) { }

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
      this.successMessage = 'Pagamento effettuato con successo';
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

}
