import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.page.html',
  styleUrls: ['./invite-friend.page.scss'],
})
export class InviteFriendPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async invitaAmico(social) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Codice condiviso su ' + social + '!',
      subHeader: 'Codice inviato con successo',
      message: 'Riceverete a breve entrambi 20 punti sul wallet',
      buttons: ['OK']
    });

    await alert.present();
  }

}
