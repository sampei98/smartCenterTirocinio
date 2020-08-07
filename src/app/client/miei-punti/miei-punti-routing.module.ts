import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MieiPuntiPage } from './miei-punti.page';

const routes: Routes = [
  {
    path: '',
    component: MieiPuntiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MieiPuntiPageRoutingModule {}
