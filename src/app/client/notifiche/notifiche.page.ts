import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.page.html',
  styleUrls: ['./notifiche.page.scss'],
})
export class NotifichePage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(mesHead, mesBody) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'BENTORNATO!',
      subHeader: mesHead,
      message: mesBody,
      buttons: ['OK']
    });

    await alert.present();
  }

}
