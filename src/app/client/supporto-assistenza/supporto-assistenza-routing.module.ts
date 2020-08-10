import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportoAssistenzaPage } from './supporto-assistenza.page';

const routes: Routes = [
  {
    path: '',
    component: SupportoAssistenzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportoAssistenzaPageRoutingModule {}
