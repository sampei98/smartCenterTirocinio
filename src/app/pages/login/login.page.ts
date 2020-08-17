import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {NegoziServiceService} from '../../services/negozi-service.service';
import {NegozioComponent} from '../../components/negozio/negozio.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  negozio: any;

  constructor(private router: Router,
              public alertController: AlertController,
              private myService: NegoziServiceService) {
    this.myService.initializaJSONData();
  }

  ngOnInit() {
  }

  login() {
    this.negozio = this.myService.getNegozioByNameString(this.username);
    if (this.username === 'cliente' && this.password === 'cliente') {
      this.router.navigate(['/client']);
    } else if (this.negozio !== undefined) {
      NegozioComponent.negozio = this.negozio;
      this.router.navigate(['/commerciante/home']);
    } else {
      this.passwordErrata();
    }
  }

  async passwordErrata() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATTENZIONE!',
      subHeader: 'Password errata!',
      message: 'Controllare nome utente e password.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
