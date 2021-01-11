import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTrabajoComponent } from './admin-trabajo/admin-trabajo.component';
import { FormTrabajoComponent } from './form-trabajo/form-trabajo.component';



const routes: Routes = [
  {
    path:"adminTrabajo",
    component:AdminTrabajoComponent
    },
    {
    path:"formTrabajo",
    component:FormTrabajoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajoAdminRoutingModule { }
