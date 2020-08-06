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
  },
  {
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
  },
  {
    path: 'view-negozi',
    loadChildren: () => import('./client/view-negozi/view-negozi.module').then( m => m.ViewNegoziPageModule)
  },
  {
    path: 'detail-negozio',
    loadChildren: () => import('./client/detail-negozio/detail-negozio.module').then( m => m.DetailNegozioPageModule)
  },
  {
    path: 'detail-negozio-product',
    loadChildren: () => import('./client/detail-negozio-product/detail-negozio-product.module').then( m => m.DetailNegozioProductPageModule)
  },
  {
    path: 'detail-negozio-product-info',
    loadChildren: () => import('./client/detail-negozio-product-info/detail-negozio-product-info.module').then( m => m.DetailNegozioProductInfoPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
