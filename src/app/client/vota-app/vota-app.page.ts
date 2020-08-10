import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-vota-app',
  templateUrl: './vota-app.page.html',
  styleUrls: ['./vota-app.page.scss'],
})
export class VotaAppPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async lasciaRecensione() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi inserire la recensione?',
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
            console.log('Confirm Si');
          }
        }
      ]
    });

    await alert.present();
  }

}
