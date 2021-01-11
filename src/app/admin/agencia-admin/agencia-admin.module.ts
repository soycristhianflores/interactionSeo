import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciaAdminRoutingModule } from './agencia-admin-routing.module';
import { AdminAgenciaComponent } from './admin-agencia/admin-agencia.component';


@NgModule({
  declarations: [AdminAgenciaComponent],
  imports: [
    CommonModule,
    AgenciaAdminRoutingModule
  ]
})
export class AgenciaAdminModule { }
