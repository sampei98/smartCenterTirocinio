import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNavPageRoutingModule } from './home-nav-routing.module';

import { HomeNavPage } from './home-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNavPageRoutingModule
  ],
  declarations: [HomeNavPage]
})
export class HomeNavPageModule {}
