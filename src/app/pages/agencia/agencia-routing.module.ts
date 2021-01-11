import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciaModule } from './agencia.module';
import { AgenciaComponent } from './agencia/agencia.component';


const routes: Routes = [
  {
    path:"agencia",
    component:AgenciaComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciaRoutingModule { }
