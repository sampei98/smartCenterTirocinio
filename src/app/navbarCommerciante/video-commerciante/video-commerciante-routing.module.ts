import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCommerciantePage } from './video-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCommerciantePageRoutingModule {}
