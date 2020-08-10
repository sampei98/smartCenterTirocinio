import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-detail-negozio',
  templateUrl: './detail-negozio.page.html',
  styleUrls: ['./detail-negozio.page.scss'],
})
export class DetailNegozioPage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router, public alertController: AlertController)  {
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = JSON.parse(params.special) ;
      }
    });
  }

  ngOnInit() {
  }

  showProduct() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data)
      }
    };
    this.router.navigate(['detail-negozio-product'], navigationExtras);
  }

  async showOfferte() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data)
      }
    };
    console.log(this.data.offerte.length);
    if (this.data.offerte.length > 0) {
      this.router.navigate(['detail-negozio-sale'], navigationExtras);
    } else {
      console.log(this.data.offerte.length);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Attenzione!',
        subHeader: 'Nessuna promozione disponibile al momento',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  showRecensioni() {
    alert('ciao');
    console.log('recensioni');
  }
}
