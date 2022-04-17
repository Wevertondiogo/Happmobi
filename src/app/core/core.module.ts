import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from './../material-module/material.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, NavbarComponent]
})
export class CoreModule { }
