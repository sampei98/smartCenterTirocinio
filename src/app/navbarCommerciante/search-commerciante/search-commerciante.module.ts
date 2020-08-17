import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCommerciantePageRoutingModule } from './search-commerciante-routing.module';

import { SearchCommerciantePage } from './search-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCommerciantePageRoutingModule
  ],
  declarations: [SearchCommerciantePage]
})
export class SearchCommerciantePageModule {}
