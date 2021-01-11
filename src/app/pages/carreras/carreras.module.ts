import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarreraComponent } from './carrera/carrera.component';
import {GeneralModule} from './../../general/general.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarreraComponent],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    GeneralModule,
    FormsModule
  ]
})
export class CarrerasModule { }
