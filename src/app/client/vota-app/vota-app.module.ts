import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotaAppPageRoutingModule } from './vota-app-routing.module';

import { VotaAppPage } from './vota-app.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VotaAppPageRoutingModule,
        HomePageModule
    ],
  declarations: [VotaAppPage]
})
export class VotaAppPageModule {}
