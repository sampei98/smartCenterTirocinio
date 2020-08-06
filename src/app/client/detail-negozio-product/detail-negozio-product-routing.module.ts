import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegozioProductPage } from './detail-negozio-product.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegozioProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegozioProductPageRoutingModule {}
