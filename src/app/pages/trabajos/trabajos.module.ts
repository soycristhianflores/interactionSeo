import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajosRoutingModule } from './trabajos-routing.module';
import { TrabajosComponent } from './trabajos/trabajos.component';
import {GeneralModule} from './../../general/general.module';


@NgModule({
  declarations: [TrabajosComponent],
  imports: [
    CommonModule,
    TrabajosRoutingModule,
    GeneralModule
  ]
})
export class TrabajosModule { }
