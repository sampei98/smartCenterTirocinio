import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-detail-negozio-voto',
  templateUrl: './detail-negozio-voto.page.html',
  styleUrls: ['./detail-negozio-voto.page.scss'],
})
export class DetailNegozioVotoPage implements OnInit {

  data: any;
  valoreRecensione: string;
  testoRecensione: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private myService: NegoziServiceService,
              public alertController: AlertController)  {
    this.initializaJSONData();
  }
  initializaJSONData(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }
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
            this.aggiungiRecensione();
          }
        }
      ]
    });

    await alert.present();
  }
  aggiungiRecensione(){
    console.log(this.valoreRecensione);
    console.log(this.testoRecensione);
    this.data = this.myService.addRecensione(this.data.name, this.valoreRecensione, 'tu', this.testoRecensione, 'oggi');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data)
      }
    };
    this.router.navigate(['detail-negozio-voto'], navigationExtras);
  }
}
