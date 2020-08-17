import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCommerciantePage } from './search-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCommerciantePageRoutingModule {}
