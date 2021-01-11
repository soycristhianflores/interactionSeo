import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { PlanningComponent } from './planning/planning.component';
import { BrandingComponent } from './branding/branding.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { DigitalComponent } from './digital/digital.component';
import { WebComponent } from './web/web.component';
import { PaidComponent } from './paid/paid.component';


const routes: Routes = [
  {
    path: 'servicios',
    component: ServiciosComponent,
    children: [
      {
        path: "planning",
        component: PlanningComponent
      },
      {
        path: "branding",
        component: BrandingComponent
      },
      {
        path: "estrategia",
        component: EstrategiaComponent
      },
      {
        path: "digital",
        component: DigitalComponent
      },
      {
        path: "web",
        component: WebComponent
      },
      {
        path: "paid",
        component: PaidComponent
      },
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
