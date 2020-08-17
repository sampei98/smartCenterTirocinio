import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNavCommerciantePageRoutingModule } from './home-nav-commerciante-routing.module';

import { HomeNavCommerciantePage } from './home-nav-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNavCommerciantePageRoutingModule
  ],
  declarations: [HomeNavCommerciantePage]
})
export class HomeNavCommerciantePageModule {}
