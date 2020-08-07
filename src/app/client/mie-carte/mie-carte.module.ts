import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MieCartePageRoutingModule } from './mie-carte-routing.module';

import { MieCartePage } from './mie-carte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MieCartePageRoutingModule
  ],
  declarations: [MieCartePage]
})
export class MieCartePageModule {}
