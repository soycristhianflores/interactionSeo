import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCarreraComponent } from './crear-carrera/crear-carrera.component';
import { ListarParticipantesComponent } from './listar-participantes/listar-participantes.component';



const routes: Routes = [
  {
    path:"adminCarrera",
    component:ListarParticipantesComponent
    },
    {
    path:"formCarrera",
    component:CrearCarreraComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraAdminRouting { }
