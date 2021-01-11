import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPremiosRoutingModule } from './admin-premios-routing.module';
import { AdminPremiosComponent } from './admin-premios/admin-premios.component';
import { FormPremiosComponent } from './form-premios/form-premios.component';


@NgModule({
  declarations: [AdminPremiosComponent, FormPremiosComponent],
  imports: [
    CommonModule,
    AdminPremiosRoutingModule
  ]
})
export class AdminPremiosModule { }
