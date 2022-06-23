import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainbodyRoutingModule } from './mainbody-routing.module';
import { SoftwareComponent } from './Software/software/software.component';
import { HealthComponent } from './Health/health/health.component';
import { InfraComponent } from './Infra/infra/infra.component';
import { DeffenceComponent } from './Deffence/deffence/deffence.component';
import { SolarComponent } from './Solar/solar/solar.component';
import { AutomobileComponent } from './Automobile/automobile/automobile.component';


@NgModule({
  declarations: [
    SoftwareComponent,
    HealthComponent,
    InfraComponent,
    DeffenceComponent,
    SolarComponent,
    AutomobileComponent
  ],
  imports: [
    CommonModule,
    MainbodyRoutingModule
  ]
})
export class MainbodyModule { }
