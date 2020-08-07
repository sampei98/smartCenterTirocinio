import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertiPuntiPageRoutingModule } from './converti-punti-routing.module';

import { ConvertiPuntiPage } from './converti-punti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertiPuntiPageRoutingModule
  ],
  declarations: [ConvertiPuntiPage]
})
export class ConvertiPuntiPageModule {}
