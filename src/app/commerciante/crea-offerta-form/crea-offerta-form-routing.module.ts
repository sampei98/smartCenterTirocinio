import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaOffertaFormPage } from './crea-offerta-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreaOffertaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaOffertaFormPageRoutingModule {}
