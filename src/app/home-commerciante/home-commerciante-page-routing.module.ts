import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCommerciantePage } from './home-commerciante.page';

const routes: Routes = [
  {
    path: 'commerciante',
    component: HomeCommerciantePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../navbarCommerciante/home-nav-commerciante/home-nav-commerciante.module').
        then( m => m.HomeNavCommerciantePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../navbarCommerciante/search-commerciante/search-commerciante.module').
        then( m => m.SearchCommerciantePageModule)
      },
      {
        path: 'scansiona',
        loadChildren: () => import('../navbarCommerciante/scansiona-commerciante/scansiona-commerciante.module').
        then( m => m.ScansionaCommerciantePageModule)
      },
      {
        path: 'videocamere',
        loadChildren: () => import('../navbarCommerciante/video-commerciante/video-commerciante.module').
        then( m => m.VideoCommerciantePageModule)
      },
      {
        path: '',
        loadChildren: () => import('../navbarCommerciante/home-nav-commerciante/home-nav-commerciante.module').
        then( m => m.HomeNavCommerciantePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCommerciantePageRoutingModule {}

