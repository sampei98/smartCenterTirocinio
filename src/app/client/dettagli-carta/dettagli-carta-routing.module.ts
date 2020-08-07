import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliCartaPage } from './dettagli-carta.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliCartaPage
  },
  {
    path: ':carta',
    component: DettagliCartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliCartaPageRoutingModule {}
