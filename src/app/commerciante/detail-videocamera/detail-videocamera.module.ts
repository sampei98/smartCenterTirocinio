import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailVideocameraPageRoutingModule } from './detail-videocamera-routing.module';

import { DetailVideocameraPage } from './detail-videocamera.page';
import {HomeCommerciantePageModule} from '../../home-commerciante/home-commerciante.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailVideocameraPageRoutingModule,
        HomeCommerciantePageModule
    ],
  declarations: [DetailVideocameraPage]
})
export class DetailVideocameraPageModule {}
