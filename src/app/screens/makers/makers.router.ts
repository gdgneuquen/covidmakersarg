import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MakersPageComponent } from './components/makers-page/makers-page.component';

const makersroutes = [
    {
        path: '', component: MakersPageComponent,
        // canActivate: [CoreMobileGuard],
        // canLoad: [NgxPermissionsGuard],
    },

];

@NgModule({
    imports: [RouterModule.forChild(makersroutes)],
    exports: [RouterModule]
})
export class MakersRoutingModule { }


