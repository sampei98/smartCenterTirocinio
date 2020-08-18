import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaOffertaFormPageRoutingModule } from './crea-offerta-form-routing.module';

import { CreaOffertaFormPage } from './crea-offerta-form.page';
import {HomeCommerciantePageModule} from '../../home-commerciante/home-commerciante.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreaOffertaFormPageRoutingModule,
        HomeCommerciantePageModule
    ],
  declarations: [CreaOffertaFormPage]
})
export class CreaOffertaFormPageModule {}
