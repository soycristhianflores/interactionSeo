import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './componentes/principal/principal.component';
import {GeneralModule} from './../../general/general.module';



@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralModule
  ]
})
export class HomeModule { }
