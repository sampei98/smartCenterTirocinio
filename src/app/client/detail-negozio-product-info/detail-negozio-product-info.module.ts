import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegozioProductInfoPageRoutingModule } from './detail-negozio-product-info-routing.module';

import { DetailNegozioProductInfoPage } from './detail-negozio-product-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailNegozioProductInfoPageRoutingModule
  ],
  declarations: [DetailNegozioProductInfoPage]
})
export class DetailNegozioProductInfoPageModule {}
