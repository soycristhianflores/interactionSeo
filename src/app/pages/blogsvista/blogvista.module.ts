import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blogvista3RoutingModule } from './blogvista-routing.module';
import { Blogvista3Component } from './componentes/blogvista3/blogvista3.component';
import {GeneralModule} from './../../general/general.module';



@NgModule({
  declarations: [Blogvista3Component],
  imports: [
    CommonModule,
    Blogvista3RoutingModule,
    GeneralModule
  ],
  exports: [Blogvista3Component]
})
export class BlogvistaModule { }
