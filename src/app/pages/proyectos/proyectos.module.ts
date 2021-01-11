import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectComponent } from './componentes/proyect/proyect.component';
import {GeneralModule} from './../../general/general.module';
import { FiltroPipe } from '../../filtro.pipe'


@NgModule({
  declarations: [ProyectComponent,FiltroPipe],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    GeneralModule
  ],
  exports: [ProyectComponent]
})
export class ProyectosModule { }
