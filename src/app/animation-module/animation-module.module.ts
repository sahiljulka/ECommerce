import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdCheckboxModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSelectModule,
    MdButtonModule
  ],
  declarations: []
})
export class AnimationModuleModule { }
