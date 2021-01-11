import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraAdminRouting } from './admin-carreras-routing-module';
import { CrearCarreraComponent } from './crear-carrera/crear-carrera.component';
import { ListarParticipantesComponent } from './listar-participantes/listar-participantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearCarreraComponent, ListarParticipantesComponent],
  imports: [
    CommonModule,
    CarreraAdminRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarreraAdminModule { }
