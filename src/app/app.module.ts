import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from './general/general.module';
import { BlogModule } from './pages/blog/blog.module';
import { CarrerasModule } from './pages/carreras/carreras.module';
import { PremiosModule } from './pages/premios/premios.module';
import { TrabajosModule } from './pages/trabajos/trabajos.module';
import { AgenciaModule } from './pages/agencia/agencia.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ServiciosModule } from './pages/servicios/servicios.module';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './filtro.pipe';
import { TrabajoAdminModule } from './admin/trabajo-admin/trabajo-admin.module';
import { AgenciaAdminModule } from './admin/agencia-admin/agencia-admin.module';
import { BlogAdminModule } from './admin/blog-admin/blog-admin.module';
import { AdminPremiosModule } from './admin/admin-premios/admin-premios.module';
import { HomeAdminModule } from './admin/home-admin/home-admin.module';

import { CarreraAdminModule } from "./admin/admin-carreras/admin-carreras-module";



declare var $: any;
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-universal-demystified'}),
    AppRoutingModule,
    GeneralModule,
    BlogModule,
    CarrerasModule,
    PremiosModule,
    TrabajosModule,
    AgenciaModule,
    ServiciosModule,
    DashboardModule,
    HttpClientModule,
    TrabajoAdminModule,
    AgenciaAdminModule,
    BlogAdminModule,
    AdminPremiosModule,
    HomeAdminModule,
    CarreraAdminModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
