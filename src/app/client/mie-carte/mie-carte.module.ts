import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MieCartePageRoutingModule } from './mie-carte-routing.module';

import { MieCartePage } from './mie-carte.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MieCartePageRoutingModule,
        HomePageModule
    ],
  declarations: [MieCartePage]
})
export class MieCartePageModule {}
