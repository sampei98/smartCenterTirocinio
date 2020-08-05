import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home-nav',
    loadChildren: () => import('./navbarClient/home-nav/home-nav.module').then( m => m.HomeNavPageModule)
  },
  {
    path: 'search-client',
    loadChildren: () => import('./navbarClient/search-client/search-client.module').then( m => m.SearchClientPageModule)
  },
  {
    path: 'sale-client',
    loadChildren: () => import('./navbarClient/sale-client/sale-client.module').then( m => m.SaleClientPageModule)
  },
  {
    path: 'pay-client',
    loadChildren: () => import('./navbarClient/pay-client/pay-client.module').then( m => m.PayClientPageModule)
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./navbarClient/profile-client/profile-client.module').then( m => m.ProfileClientPageModule)
  },  {
    path: 'parcheggio',
    loadChildren: () => import('./client/parcheggio/parcheggio.module').then( m => m.ParcheggioPageModule)
  },
  {
    path: 'posto',
    loadChildren: () => import('./client/posto/posto.module').then( m => m.PostoPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./client/success/success.module').then( m => m.SuccessPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
