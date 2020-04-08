import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockPageComponent } from './components/stock-page/stock-page.component';

const stockroutes = [
    {
        path: '', component: StockPageComponent,
        // canActivate: [CoreMobileGuard],
        // canLoad: [NgxPermissionsGuard],
    },

];

@NgModule({
    imports: [RouterModule.forChild(stockroutes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }


