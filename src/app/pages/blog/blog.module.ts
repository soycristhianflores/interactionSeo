import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import {GeneralModule} from './../../general/general.module';



@NgModule({
  declarations: [BlogPagesComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    GeneralModule
  ]
})
export class BlogModule { }
