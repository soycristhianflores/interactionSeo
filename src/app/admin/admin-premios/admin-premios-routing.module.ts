import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPremiosComponent } from './admin-premios/admin-premios.component';
import { FormPremiosComponent } from './form-premios/form-premios.component';


const routes: Routes = [
  { path: 'adminPremios',
   component: AdminPremiosComponent },
   { path: 'formPremios',
  component: FormPremiosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPremiosRoutingModule { }
