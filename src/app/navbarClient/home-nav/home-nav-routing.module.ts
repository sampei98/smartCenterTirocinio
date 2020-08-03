import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNavPage } from './home-nav.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNavPageRoutingModule {}
