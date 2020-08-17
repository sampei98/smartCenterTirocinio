import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegozioVotoPageRoutingModule } from './detail-negozio-voto-routing.module';

import { DetailNegozioVotoPage } from './detail-negozio-voto.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailNegozioVotoPageRoutingModule,
        HomePageModule
    ],
  declarations: [DetailNegozioVotoPage]
})
export class DetailNegozioVotoPageModule {}
