import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliCartaPageRoutingModule } from './dettagli-carta-routing.module';

import { DettagliCartaPage } from './dettagli-carta.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DettagliCartaPageRoutingModule,
        HomePageModule
    ],
  declarations: [DettagliCartaPage]
})
export class DettagliCartaPageModule {}
