import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegozioPageRoutingModule } from './detail-negozio-routing.module';

import { DetailNegozioPage } from './detail-negozio.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailNegozioPageRoutingModule,
        HomePageModule
    ],
  declarations: [DetailNegozioPage]
})
export class DetailNegozioPageModule {}
