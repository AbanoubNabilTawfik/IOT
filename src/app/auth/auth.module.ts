import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
