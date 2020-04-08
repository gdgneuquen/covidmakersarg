import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const profileroutes = [
    {
        path: '', component: ProfilePageComponent,
        // canActivate: [CoreMobileGuard],
        // canLoad: [NgxPermissionsGuard],
    },

];

@NgModule({
    imports: [RouterModule.forChild(profileroutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }


