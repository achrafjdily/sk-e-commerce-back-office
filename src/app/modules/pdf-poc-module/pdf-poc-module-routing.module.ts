import { PdfPocComponent } from './pdf-poc/pdf-poc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "generate",
    component : PdfPocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfPocModuleRoutingModule { }
