import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import {HomeCommerciantePageModule} from '../../home-commerciante/home-commerciante.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductDetailPageRoutingModule,
        HomeCommerciantePageModule
    ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
