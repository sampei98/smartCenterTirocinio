import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNavCommerciantePage } from './home-nav-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNavCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNavCommerciantePageRoutingModule {}
