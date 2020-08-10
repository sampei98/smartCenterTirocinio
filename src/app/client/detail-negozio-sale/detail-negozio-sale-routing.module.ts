import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegozioSalePage } from './detail-negozio-sale.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegozioSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegozioSalePageRoutingModule {}
