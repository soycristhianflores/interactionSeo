import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'', loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule)},
  {path:'', loadChildren: ()=> import('./pages/proyectos/proyectos.module').then(m=>m.ProyectosModule)},
  {path:'', loadChildren: ()=> import('./pages/trabajos/trabajos.module').then(m=>m.TrabajosModule)},
  {path:'', loadChildren: ()=> import('./pages/agencia/agencia.module').then(m=>m.AgenciaModule)},
  {path:'', loadChildren: ()=> import('./pages/servicios/servicios.module').then(m=>m.ServiciosModule)},
  {path:'', loadChildren: ()=> import('./pages/blogsvista/blogvista.module').then(m=>m.BlogvistaModule)},
  {path:'', loadChildren: ()=> import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  

];


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
