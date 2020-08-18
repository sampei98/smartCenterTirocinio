import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContattiPage } from './lista-contatti.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContattiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContattiPageRoutingModule {}
