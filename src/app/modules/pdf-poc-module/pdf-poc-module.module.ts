import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfPocModuleRoutingModule } from './pdf-poc-module-routing.module';
import { PdfPocComponent } from './pdf-poc/pdf-poc.component';


@NgModule({
  declarations: [
    PdfPocComponent
  ],
  imports: [
    CommonModule,
    PdfPocModuleRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PdfPocModuleModule { }
