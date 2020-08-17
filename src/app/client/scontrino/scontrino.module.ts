import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScontrinoPageRoutingModule } from './scontrino-routing.module';

import { ScontrinoPage } from './scontrino.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ScontrinoPageRoutingModule,
        HomePageModule
    ],
  declarations: [ScontrinoPage]
})
export class ScontrinoPageModule {}
