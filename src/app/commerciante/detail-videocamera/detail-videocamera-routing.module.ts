import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVideocameraPage } from './detail-videocamera.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVideocameraPage
  },
  {
    path: ':id/:zona',
    component: DetailVideocameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVideocameraPageRoutingModule {}
