import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleClientPageRoutingModule } from './sale-client-routing.module';

import { SaleClientPage } from './sale-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleClientPageRoutingModule
  ],
  declarations: [SaleClientPage]
})
export class SaleClientPageModule {}
