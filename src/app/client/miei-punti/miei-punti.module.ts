import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MieiPuntiPageRoutingModule } from './miei-punti-routing.module';

import { MieiPuntiPage } from './miei-punti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MieiPuntiPageRoutingModule
  ],
  declarations: [MieiPuntiPage]
})
export class MieiPuntiPageModule {}
