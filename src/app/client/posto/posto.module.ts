import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostoPageRoutingModule } from './posto-routing.module';

import { PostoPage } from './posto.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PostoPageRoutingModule,
        HomePageModule
    ],
  declarations: [PostoPage]
})
export class PostoPageModule {}
