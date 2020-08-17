import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegozioSalePageRoutingModule } from './detail-negozio-sale-routing.module';

import { DetailNegozioSalePage } from './detail-negozio-sale.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailNegozioSalePageRoutingModule,
        HomePageModule
    ],
  declarations: [DetailNegozioSalePage]
})
export class DetailNegozioSalePageModule {}
