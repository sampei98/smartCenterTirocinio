import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationCommerciantePage } from './notification-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationCommerciantePageRoutingModule {}
