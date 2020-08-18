import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-crea-offerta-form',
  templateUrl: './crea-offerta-form.page.html',
  styleUrls: ['./crea-offerta-form.page.scss'],
})
export class CreaOffertaFormPage implements OnInit {
  tipo: string;
  nome: any = '';
  breveDescr: any = '';
  lungaDescr: any = '';
  dataInizio: any = '';
  dataFine: any = '';
  img: any = '';
  constructor(private route: ActivatedRoute,
              public alertController: AlertController) {
    this.initializaJSONData();
  }

  ngOnInit() {
  }
  initializaJSONData(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.tipo = JSON.parse(params.special) ;
      }
    });
  }
  addOfferta(){
    console.log(this.nome);
    if (this.nome === ''){
      this.presentAlert('nome');
    } else if (this.breveDescr === ''){
      this.presentAlert('breve descrizione');
    } else if (this.lungaDescr === ''){
      this.presentAlert('lunga descrizione');
    } else if (this.dataInizio === ''){
      this.presentAlert('data inizio');
    } else if (this.dataFine === ''){
      this.presentAlert('data fine');
    } else if (this.img === ''){
      this.presentAlert('immagine');
    } else {
      this.inserisciNew();
    }
  }
  async presentAlert(campoMancante: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATTENZIONE!',
      subHeader: 'Compilare il campo ' + campoMancante,
      message: 'Compilare tutti i campi.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async inserisciNew() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi inserire la seguente offerta?',
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
      header: 'OFFERTA AGGIUNTA!',
      subHeader: 'Inserita offerta ' + this.nome,
      message: 'Offerta inserita con successo.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
