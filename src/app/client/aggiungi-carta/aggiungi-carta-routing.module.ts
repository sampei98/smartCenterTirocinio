import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiungiCartaPage } from './aggiungi-carta.page';

const routes: Routes = [
  {
    path: '',
    component: AggiungiCartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiungiCartaPageRoutingModule {}
