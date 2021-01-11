import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Blogvista3Component } from './componentes/blogvista3/blogvista3.component';


const routes: Routes = [
  {
  path:"blog",
  component:Blogvista3Component
  },
  {
    path:"blog/:idblog",
    component:Blogvista3Component
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blogvista3RoutingModule { }
