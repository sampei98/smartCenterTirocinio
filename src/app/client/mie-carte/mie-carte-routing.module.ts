import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MieCartePage } from './mie-carte.page';

const routes: Routes = [
  {
    path: '',
    component: MieCartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MieCartePageRoutingModule {}
