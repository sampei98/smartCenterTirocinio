import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindCarPage } from './find-car.page';

const routes: Routes = [
  {
    path: '',
    component: FindCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindCarPageRoutingModule {}
