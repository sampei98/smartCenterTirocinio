import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MioWalletPageRoutingModule } from './mio-wallet-routing.module';

import { MioWalletPage } from './mio-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MioWalletPageRoutingModule
  ],
  declarations: [MioWalletPage]
})
export class MioWalletPageModule {}
