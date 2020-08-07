import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-converti-punti',
  templateUrl: './converti-punti.page.html',
  styleUrls: ['./converti-punti.page.scss'],
})
export class ConvertiPuntiPage implements OnInit {

  constructor(public alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  async convertiSuccess(punti, soldi) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi convertire ' + punti + ' punti per ' + soldi + ' euro?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Si ' );
            soldi = 'Accreditati ' + soldi + ' euro';
            this.router.navigate(['/success/Punti convertiti/' + soldi]);
          }
        }
      ]
    });

    await alert.present();
  }

  async convertiError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attenzione!',
      subHeader: 'Numero punti insufficiente',
      buttons: ['OK']
    });

    await alert.present();
  }

}
