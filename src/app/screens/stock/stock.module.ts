import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockPageComponent } from './components/stock-page/stock-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StockRoutingModule } from './stock.router';



@NgModule({
  declarations: [StockPageComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule
  ]
})
export class StockModule { }
