import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteFriendPageRoutingModule } from './invite-friend-routing.module';

import { InviteFriendPage } from './invite-friend.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InviteFriendPageRoutingModule,
        HomePageModule
    ],
  declarations: [InviteFriendPage]
})
export class InviteFriendPageModule {}
