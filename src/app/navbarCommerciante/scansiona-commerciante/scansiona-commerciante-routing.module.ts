import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScansionaCommerciantePage } from './scansiona-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: ScansionaCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScansionaCommerciantePageRoutingModule {}
