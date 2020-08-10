import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportoAssistenzaPageRoutingModule } from './supporto-assistenza-routing.module';

import { SupportoAssistenzaPage } from './supporto-assistenza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportoAssistenzaPageRoutingModule
  ],
  declarations: [SupportoAssistenzaPage]
})
export class SupportoAssistenzaPageModule {}
