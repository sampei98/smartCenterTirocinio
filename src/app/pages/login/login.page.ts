import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  login() {
      if (this.username === 'cliente' && this.password === 'cliente'){
        this.router.navigate(['/client']);
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
