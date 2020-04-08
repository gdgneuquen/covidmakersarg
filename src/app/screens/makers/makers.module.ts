import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakersPageComponent } from './components/makers-page/makers-page.component';
import { MakersRoutingModule } from './makers.router';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [MakersPageComponent],
  imports: [
    CommonModule,
    MakersRoutingModule,
    MaterialModule
  ]
})
export class MakersModule { }
