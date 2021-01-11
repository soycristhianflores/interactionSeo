import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajoAdminRoutingModule } from './trabajo-admin-routing.module';
import { AdminTrabajoComponent } from './admin-trabajo/admin-trabajo.component';
import { FormTrabajoComponent } from './form-trabajo/form-trabajo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminTrabajoComponent, FormTrabajoComponent],
  imports: [
    CommonModule,
    TrabajoAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrabajoAdminModule { }
