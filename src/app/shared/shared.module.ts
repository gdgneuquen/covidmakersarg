import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogLoginRegisterComponent } from './components/dialog-login-register/dialog-login-register.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DialogLoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    DialogLoginRegisterComponent
  ]
})
export class SharedModule { }
