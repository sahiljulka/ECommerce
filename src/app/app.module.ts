import { CartComponent } from './cart/cart/cart.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';


import {AnimationModuleModule} from './animation-module/animation-module.module';
import {CartModule} from './cart/cart.module';

const routes=[
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimationModuleModule,
    CartModule,
    RouterModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
