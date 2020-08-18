import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationCommerciantePageRoutingModule } from './notification-commerciante-routing.module';

import { NotificationCommerciantePage } from './notification-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationCommerciantePageRoutingModule
  ],
  declarations: [NotificationCommerciantePage]
})
export class NotificationCommerciantePageModule {}
