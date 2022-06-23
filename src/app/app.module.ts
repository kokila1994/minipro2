import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MainbodyComponent } from './MainBody/mainbody/mainbody.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { LeftComponent } from './leftnav/left/left.component';
import { SharedDirective } from './CustomDirective/shared.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbodyComponent,
    FooterComponent,
    LoginComponent,
    LeftComponent,
    SharedDirective,
 
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
