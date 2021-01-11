import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectComponent } from './componentes/proyect/proyect.component';


const routes: Routes = [
  {
  path:"proyectos",
  component:ProyectComponent
  },
  {
    path:"proyect/:idTrabajo",
    component:ProyectComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
