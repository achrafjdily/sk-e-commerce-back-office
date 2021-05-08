import { ToolbarProfileComponent } from './layouts/full-layout/toolbar/toolbar-profile/toolbar-profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { AppStateModule } from './ngrx/app-state/app-state.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SidebarComponent } from './layouts/full-layout/sidebar/sidebar.component';
import { MenuItemComponent } from './layouts/full-layout/sidebar/menu-item/menu-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    FullLayoutComponent,
    SidebarComponent,
    MenuItemComponent,
    LoginComponent,
    ToolbarProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppStateModule,
    MatMenuModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
