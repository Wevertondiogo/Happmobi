import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PaginationItemComponent } from './modules/components/pagination-item/pagination-item.component';
import { PageControlsComponent } from './modules/components/page-controls/page-controls.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginationItemComponent,
    PageControlsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
