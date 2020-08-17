import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindCarPageRoutingModule } from './find-car-routing.module';

import { FindCarPage } from './find-car.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FindCarPageRoutingModule,
        HomePageModule
    ],
  declarations: [FindCarPage]
})
export class FindCarPageModule {}
