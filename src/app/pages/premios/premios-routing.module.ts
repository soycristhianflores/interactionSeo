import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremioComponent } from './premio/premio.component';


const routes: Routes = [
  {
    path:"premios",
    component:PremioComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiosRoutingModule { }
