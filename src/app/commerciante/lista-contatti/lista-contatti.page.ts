import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.page.html',
  styleUrls: ['./lista-contatti.page.scss'],
})
export class ListaContattiPage implements OnInit {
    data: any;
    list: any;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async inserisciNew() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi inviare la notifica di possibile contatto con contagiati?',
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
      subHeader: 'La notifica è stata inviata a tutti',
      buttons: ['OK']
    });

    await alert.present();
  }

  mostraLista() {
    this.list = document.getElementById('listaPersone');
    this.list.style.display = 'block';
  }

  mostraListaVuota() {
    this.list = document.getElementById('listaPersone');
    this.list.style.display = 'none';
  }

}
