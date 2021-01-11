import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { FormBlogComponent } from './form-blog/form-blog.component';



const routes: Routes = [
  {
    path:"adminBlog",
    component:AdminBlogComponent
    },
    {
    path:"formBlog",
    component:FormBlogComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAdminRoutingModule { }
