import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';

const homeroutes = [
    {
        path: '', component: HomePageComponent,
        // canActivate: [CoreMobileGuard],
        // canLoad: [NgxPermissionsGuard],
    },

];

@NgModule({
    imports: [RouterModule.forChild(homeroutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }


