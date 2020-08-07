import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertiPuntiPage } from './converti-punti.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertiPuntiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertiPuntiPageRoutingModule {}
