import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegozioVotoPage } from './detail-negozio-voto.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegozioVotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegozioVotoPageRoutingModule {}
