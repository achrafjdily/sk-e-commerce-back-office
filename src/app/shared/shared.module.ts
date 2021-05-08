import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
  ]
})
export class SharedModule { }