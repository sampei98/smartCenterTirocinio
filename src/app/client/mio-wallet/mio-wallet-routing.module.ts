import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MioWalletPage } from './mio-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: MioWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MioWalletPageRoutingModule {}
