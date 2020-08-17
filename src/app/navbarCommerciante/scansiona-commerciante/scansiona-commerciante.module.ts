import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScansionaCommerciantePageRoutingModule } from './scansiona-commerciante-routing.module';

import { ScansionaCommerciantePage } from './scansiona-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScansionaCommerciantePageRoutingModule
  ],
  declarations: [ScansionaCommerciantePage]
})
export class ScansionaCommerciantePageModule {}
