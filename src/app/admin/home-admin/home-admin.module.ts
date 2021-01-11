import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormsModule } from '@angular/forms';
import { FormHomeVComponent } from './form-home-v/form-home-v.component';


@NgModule({
  declarations: [AdminHomeComponent, FormHomeComponent, FormHomeVComponent],
  imports: [
    CommonModule,
    HomeAdminRoutingModule,
    FormsModule
  ]
})
export class HomeAdminModule { }
