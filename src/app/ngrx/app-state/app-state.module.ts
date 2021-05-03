import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ appState : appReducer }),
    EffectsModule.forRoot([AuthEffects])
  ]
})
export class AppStateModule { }
