import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegozioPage } from './detail-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegozioPageRoutingModule {}
