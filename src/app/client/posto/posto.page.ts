import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.page.html',
  styleUrls: ['./posto.page.scss'],
})
export class PostoPage implements OnInit {

  id;
  constructor(private route: ActivatedRoute,
              public alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async postoOccupato() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATTENZIONE!',
      subHeader: 'Posto occupato!',
      message: 'Selezionare un posto libero.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async postoLibero(posto) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Vuoi prenotare il posto selezionato?',
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
            console.log('Confirm Si ' + posto);
            posto = '' + this.id + ', posto: ' + posto;
            this.router.navigate(['/success/Posto prenotato/' + posto]);
          }
        }
      ]
    });

    await alert.present();
  }

}
