import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportoAssistenzaPageRoutingModule } from './supporto-assistenza-routing.module';

import { SupportoAssistenzaPage } from './supporto-assistenza.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SupportoAssistenzaPageRoutingModule,
        HomePageModule
    ],
  declarations: [SupportoAssistenzaPage]
})
export class SupportoAssistenzaPageModule {}
