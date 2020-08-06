import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegozioProductPageRoutingModule } from './detail-negozio-product-routing.module';

import { DetailNegozioProductPage } from './detail-negozio-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailNegozioProductPageRoutingModule
  ],
  declarations: [DetailNegozioProductPage]
})
export class DetailNegozioProductPageModule {}
