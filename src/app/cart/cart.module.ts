import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent
  ],
  declarations: [CartComponent]
})
export class CartModule { }
