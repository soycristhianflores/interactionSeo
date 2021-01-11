import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaComponent } from './agencia/agencia.component';
import {GeneralModule} from './../../general/general.module';


@NgModule({
  declarations: [AgenciaComponent],
  imports: [
    CommonModule,
    AgenciaRoutingModule,
    GeneralModule
  ]
})
export class AgenciaModule { }
