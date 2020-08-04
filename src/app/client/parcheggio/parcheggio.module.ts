import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcheggioPageRoutingModule } from './parcheggio-routing.module';

import { ParcheggioPage } from './parcheggio.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ParcheggioPageRoutingModule,
        HomePageModule
    ],
  declarations: [ParcheggioPage]
})
export class ParcheggioPageModule {}
