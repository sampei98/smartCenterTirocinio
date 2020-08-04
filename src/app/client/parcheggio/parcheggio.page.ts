import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-parcheggio',
  templateUrl: './parcheggio.page.html',
  styleUrls: ['./parcheggio.page.scss'],
})
export class ParcheggioPage implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATTENZIONE!',
      subHeader: 'Fascia oraria occupata',
      message: 'Selezionare una nuova fascia oraria o una nuova data.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
