import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaOffertaPage } from './crea-offerta.page';

const routes: Routes = [
  {
    path: '',
    component: CreaOffertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaOffertaPageRoutingModule {}
