import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAdminRoutingModule } from './blog-admin-routing.module';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { FormBlogComponent } from './form-blog/form-blog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminBlogComponent, FormBlogComponent],
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    FormsModule
  ]
})
export class BlogAdminModule { }
