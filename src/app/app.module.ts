import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/modules/material/material.module';
import { RosterComponent } from './components/features/roster/roster.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentFormatPipe } from './pipes/moment-format.pipe';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [AppComponent, RosterComponent, MomentFormatPipe, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
