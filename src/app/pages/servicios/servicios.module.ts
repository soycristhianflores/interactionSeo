import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { PlanningComponent } from './planning/planning.component';
import { BrandingComponent } from './branding/branding.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { DigitalComponent } from './digital/digital.component';
import { WebComponent } from './web/web.component';
import { PaidComponent } from './paid/paid.component';
import {GeneralModule} from './../../general/general.module';


@NgModule({
  declarations: [ServiciosComponent, PlanningComponent, BrandingComponent, EstrategiaComponent, DigitalComponent, WebComponent, PaidComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    GeneralModule
  ]
})
export class ServiciosModule { }
