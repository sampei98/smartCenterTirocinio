import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayClientPage } from './pay-client.page';

const routes: Routes = [
  {
    path: '',
    component: PayClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayClientPageRoutingModule {}
