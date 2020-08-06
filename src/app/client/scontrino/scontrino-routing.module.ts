import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScontrinoPage } from './scontrino.page';

const routes: Routes = [
  {
    path: '',
    component: ScontrinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScontrinoPageRoutingModule {}
