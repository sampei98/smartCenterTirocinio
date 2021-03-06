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
    path: '',
    loadChildren: () => import('./home-commerciante/home-commerciante.module').then(m => m.HomeCommerciantePageModule)
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
    loadChildren: () => import('./client/detail-negozio-product-info/detail-negozio-product-info.module').
    then( m => m.DetailNegozioProductInfoPageModule)
  },
  {
    path: 'scontrino',
    loadChildren: () => import('./client/scontrino/scontrino.module').then( m => m.ScontrinoPageModule)
  },
  {
    path: 'notifiche',
    loadChildren: () => import('./client/notifiche/notifiche.module').then( m => m.NotifichePageModule)
  },
  {
    path: 'invite-friend',
    loadChildren: () => import('./client/invite-friend/invite-friend.module').then( m => m.InviteFriendPageModule)
  },
  {
    path: 'find-car',
    loadChildren: () => import('./client/find-car/find-car.module').then( m => m.FindCarPageModule)
  },
  {
    path: 'miei-punti',
    loadChildren: () => import('./client/miei-punti/miei-punti.module').then( m => m.MieiPuntiPageModule)
  },
  {
    path: 'converti-punti',
    loadChildren: () => import('./client/converti-punti/converti-punti.module').then( m => m.ConvertiPuntiPageModule)
  },
  {
    path: 'mie-carte',
    loadChildren: () => import('./client/mie-carte/mie-carte.module').then( m => m.MieCartePageModule)
  },
  {
    path: 'dettagli-carta',
    loadChildren: () => import('./client/dettagli-carta/dettagli-carta.module').then( m => m.DettagliCartaPageModule)
  },
  {
    path: 'aggiungi-carta',
    loadChildren: () => import('./client/aggiungi-carta/aggiungi-carta.module').then( m => m.AggiungiCartaPageModule)
  },
  {
    path: 'detail-sale',
    loadChildren: () => import('./client/detail-sale/detail-sale.module').then( m => m.DetailSalePageModule)
  },
  {
    path: 'mio-wallet',
    loadChildren: () => import('./client/mio-wallet/mio-wallet.module').then( m => m.MioWalletPageModule)
  },
  {
    path: 'vota-app',
    loadChildren: () => import('./client/vota-app/vota-app.module').then( m => m.VotaAppPageModule)
  },
  {
    path: 'supporto-assistenza',
    loadChildren: () => import('./client/supporto-assistenza/supporto-assistenza.module').then( m => m.SupportoAssistenzaPageModule)
  },
  {
    path: 'detail-negozio-sale',
    loadChildren: () => import('./client/detail-negozio-sale/detail-negozio-sale.module').then( m => m.DetailNegozioSalePageModule)
  },
  {
    path: 'detail-negozio-voto',
    loadChildren: () => import('./client/detail-negozio-voto/detail-negozio-voto.module').then( m => m.DetailNegozioVotoPageModule)
  },
  {
    path: 'home-commerciante',
    loadChildren: () => import('./home-commerciante/home-commerciante.module').then( m => m.HomeCommerciantePageModule)
  },
  {
    path: 'home-nav-commerciante',
    loadChildren: () => import('./navbarCommerciante/home-nav-commerciante/home-nav-commerciante.module').
    then( m => m.HomeNavCommerciantePageModule)
  },
  {
    path: 'search-commerciante',
    loadChildren: () => import('./navbarCommerciante/search-commerciante/search-commerciante.module').
    then( m => m.SearchCommerciantePageModule)
  },
  {
    path: 'video-commerciante',
    loadChildren: () => import('./navbarCommerciante/video-commerciante/video-commerciante.module').
    then( m => m.VideoCommerciantePageModule)
  },
  {
    path: 'scansiona-commerciante',
    loadChildren: () => import('./navbarCommerciante/scansiona-commerciante/scansiona-commerciante.module').
    then( m => m.ScansionaCommerciantePageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./commerciante/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'crea-offerta',
    loadChildren: () => import('./commerciante/crea-offerta/crea-offerta.module').then( m => m.CreaOffertaPageModule)
  },
  {
    path: 'crea-offerta-form',
    loadChildren: () => import('./commerciante/crea-offerta-form/crea-offerta-form.module').then( m => m.CreaOffertaFormPageModule)
  },
  {
    path: 'lista-contatti',
    loadChildren: () => import('./commerciante/lista-contatti/lista-contatti.module').then( m => m.ListaContattiPageModule)
  },
  {
    path: 'notification-commerciante',
    loadChildren: () => import('./navbarCommerciante/notification-commerciante/notification-commerciante.module').
    then( m => m.NotificationCommerciantePageModule)
  },  {
    path: 'detail-videocamera',
    loadChildren: () => import('./commerciante/detail-videocamera/detail-videocamera.module').then( m => m.DetailVideocameraPageModule)
  }







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
