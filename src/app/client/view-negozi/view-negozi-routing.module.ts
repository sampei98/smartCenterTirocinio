import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNegoziPage } from './view-negozi.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNegoziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNegoziPageRoutingModule {}
