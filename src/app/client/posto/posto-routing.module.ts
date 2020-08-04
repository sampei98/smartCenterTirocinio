import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostoPage } from './posto.page';

const routes: Routes = [
  {
    path: '',
    component: PostoPage
  },
  {
    path: ':id',
    component: PostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostoPageRoutingModule {}
