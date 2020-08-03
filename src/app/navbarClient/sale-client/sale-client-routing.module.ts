import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleClientPage } from './sale-client.page';

const routes: Routes = [
  {
    path: '',
    component: SaleClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleClientPageRoutingModule {}
