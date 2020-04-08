import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./screens/stock/stock.module').then(m => m.StockModule)
  },
  {
    path: 'makers',
    loadChildren: () => import('./screens/makers/makers.module').then(m => m.MakersModule)
  },
  {
    path: 'perfile',
    loadChildren: () => import('./screens/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
