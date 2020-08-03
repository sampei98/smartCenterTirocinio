import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../navbarClient/home-nav/home-nav.module').then( m => m.HomeNavPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../navbarClient/search-client/search-client.module').then( m => m.SearchClientPageModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('../navbarClient/sale-client/sale-client.module').then( m => m.SaleClientPageModule)
      },
      {
        path: 'pay',
        loadChildren: () => import('../navbarClient/pay-client/pay-client.module').then( m => m.PayClientPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../navbarClient/profile-client/profile-client.module').then( m => m.ProfileClientPageModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
