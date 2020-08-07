import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindCarPageRoutingModule } from './find-car-routing.module';

import { FindCarPage } from './find-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindCarPageRoutingModule
  ],
  declarations: [FindCarPage]
})
export class FindCarPageModule {}
