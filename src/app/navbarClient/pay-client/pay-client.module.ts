import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayClientPageRoutingModule } from './pay-client-routing.module';

import { PayClientPage } from './pay-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayClientPageRoutingModule
  ],
  declarations: [PayClientPage]
})
export class PayClientPageModule {}
