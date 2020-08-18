import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async contagiato() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi inviare la notifica anonima che sei contagiato?',
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
            console.log('Confirm Si ');
            this.presentAlertSuccess();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'NOTIFICA INVIATA!',
      subHeader: 'La notifica è stata inviata in maniera anonima a tutti i commercianti ',
      message: 'Ora potranno avvisare le persone di un possibile contatto, la ringraziamo per avercelo segnalato.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
