import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotaAppPage } from './vota-app.page';

const routes: Routes = [
  {
    path: '',
    component: VotaAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotaAppPageRoutingModule {}
