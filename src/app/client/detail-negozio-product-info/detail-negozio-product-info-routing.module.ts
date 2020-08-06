import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegozioProductInfoPage } from './detail-negozio-product-info.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegozioProductInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegozioProductInfoPageRoutingModule {}
