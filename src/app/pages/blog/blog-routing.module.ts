import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';


const routes: Routes = [
  {
    path:"blogs",
    component:BlogPagesComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
