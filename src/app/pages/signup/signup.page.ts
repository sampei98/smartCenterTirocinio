import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  username = '';
  password = '';
  private reg: RegExp;
  private regPass: RegExp;

  constructor(  public alertController: AlertController) { }

  ngOnInit() {
  }

  registrazione() {
    if ( this.validEmail() === false) {
      this.registrazioneErr('Campo email non inserito correttamente');
    }else if ( this.username === ''){
      this.registrazioneErr('Campo username non inserito correttamente');
    }else if (this.validPass() === false){
      this.registrazioneErr('Campo password non inserito correttamente');
    }else {
      this.registrazioneSucc();
      this.email = '';
      this.username = '';
      this.password = '';
    }
  }


  async registrazioneSucc() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registrazione effettuata con successo',
      buttons: ['OK']
    });

    await alert.present();
  }

  async registrazioneErr( str ) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Errore nella registrazione',
      message: str,
      buttons: ['OK']
    });

    await alert.present();
  }

   validEmail() {
      this.reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!this.reg.test(this.email)){
        return false;
      } else {
        return true;
      }
    }

    validPass(){
      this.regPass = /^[A-Za-z0-9]{8,20}$/;
      if (!this.regPass.test(this.password)){
        return false;
      } else {
        return true;
      }
    }
}
