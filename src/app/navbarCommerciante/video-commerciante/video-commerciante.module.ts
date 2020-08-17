import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCommerciantePageRoutingModule } from './video-commerciante-routing.module';

import { VideoCommerciantePage } from './video-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCommerciantePageRoutingModule
  ],
  declarations: [VideoCommerciantePage]
})
export class VideoCommerciantePageModule {}
