import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContattiPageRoutingModule } from './lista-contatti-routing.module';

import { ListaContattiPage } from './lista-contatti.page';
import {HomeCommerciantePageModule} from '../../home-commerciante/home-commerciante.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListaContattiPageRoutingModule,
        HomeCommerciantePageModule
    ],
  declarations: [ListaContattiPage]
})
export class ListaContattiPageModule {}
