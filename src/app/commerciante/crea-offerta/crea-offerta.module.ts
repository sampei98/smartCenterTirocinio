import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaOffertaPageRoutingModule } from './crea-offerta-routing.module';

import { CreaOffertaPage } from './crea-offerta.page';
import {HomeCommerciantePageModule} from '../../home-commerciante/home-commerciante.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreaOffertaPageRoutingModule,
        HomeCommerciantePageModule
    ],
  declarations: [CreaOffertaPage]
})
export class CreaOffertaPageModule {}
