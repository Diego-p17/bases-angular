
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';
import { NgModule } from '@angular/core';

const MODULES = [
  DbzModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...MODULES,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
