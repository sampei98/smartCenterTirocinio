import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNegoziPageRoutingModule } from './view-negozi-routing.module';

import { ViewNegoziPage } from './view-negozi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNegoziPageRoutingModule
  ],
    declarations: [ViewNegoziPage]
})
export class ViewNegoziPageModule {}
