import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCommerciantePageRoutingModule } from './home-commerciante-page-routing.module';

import { HomeCommerciantePage } from './home-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCommerciantePageRoutingModule
  ],
  declarations: [HomeCommerciantePage]
})
export class HomeCommerciantePageModule {}
