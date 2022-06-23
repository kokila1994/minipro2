import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobileComponent } from './Automobile/automobile/automobile.component';
import { DeffenceComponent } from './Deffence/deffence/deffence.component';
import { HealthComponent } from './Health/health/health.component';
import { InfraComponent } from './Infra/infra/infra.component';
import { SoftwareComponent } from './Software/software/software.component';
import { SolarComponent } from './Solar/solar/solar.component';

const routes: Routes = [
  {path:"Software",component:SoftwareComponent},
  {path:"healthcare",component:HealthComponent},
  {path:"Infra",component:InfraComponent},
  {path:"deffence",component:DeffenceComponent},
  {path:"solar",component:SolarComponent},
  {path:"AutoMobile",component:AutomobileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainbodyRoutingModule { }
