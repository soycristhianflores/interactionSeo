import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormHomeVComponent } from './form-home-v/form-home-v.component';



const routes: Routes = [
  {
    path:"homeAdmin",
    component:AdminHomeComponent
    },
    {
    path:"formHomeHorizontal",
    component:FormHomeComponent
    },
    {
    path:"formHomeVertical",
    component:FormHomeVComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
