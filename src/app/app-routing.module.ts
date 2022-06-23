import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MainbodyComponent } from './MainBody/mainbody/mainbody.component';




const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"login",loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule)},
  {path:"mainbody",component:MainbodyComponent},
  {path:"mainbody",loadChildren:() => import('./MainBody/mainbody/mainbody.module').then(m =>m.MainbodyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
