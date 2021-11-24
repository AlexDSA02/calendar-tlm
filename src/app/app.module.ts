import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';



const appRoutes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
]


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
