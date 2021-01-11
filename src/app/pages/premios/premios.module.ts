import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiosRoutingModule } from './premios-routing.module';
import { PremioComponent } from './premio/premio.component';
import {GeneralModule} from './../../general/general.module';



@NgModule({
  declarations: [PremioComponent],
  imports: [
    CommonModule,
    PremiosRoutingModule,
    GeneralModule
  ]
})
export class PremiosModule { }
