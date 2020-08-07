import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiCartaPageRoutingModule } from './aggiungi-carta-routing.module';

import { AggiungiCartaPage } from './aggiungi-carta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggiungiCartaPageRoutingModule
  ],
  declarations: [AggiungiCartaPage]
})
export class AggiungiCartaPageModule {}
