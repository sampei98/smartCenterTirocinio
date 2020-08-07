import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-aggiungi-carta',
  templateUrl: './aggiungi-carta.page.html',
  styleUrls: ['./aggiungi-carta.page.scss'],
})
export class AggiungiCartaPage implements OnInit {
  scanData: {};
  datiLetti: string;
  formatoLetto: string;
  successMessage: string;
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public alertController: AlertController) { }

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
      this.successMessage = 'Carta aggiunta con successo!';
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  async inserisciCarta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'Negozio',
          type: 'text',
          placeholder: 'Conad'
        },
        {
          name: 'Numero carta',
          type: 'text',
          placeholder: 'num. carta'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.successMessage = 'Carta aggiunta con successo!';
          }
        }
      ]
    });

    await alert.present();
  }

}
