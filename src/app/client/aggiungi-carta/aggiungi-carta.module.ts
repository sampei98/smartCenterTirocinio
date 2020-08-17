import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiCartaPageRoutingModule } from './aggiungi-carta-routing.module';

import { AggiungiCartaPage } from './aggiungi-carta.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AggiungiCartaPageRoutingModule,
        HomePageModule
    ],
  declarations: [AggiungiCartaPage]
})
export class AggiungiCartaPageModule {}
