import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DesignAppModule } from './design-app/design-app.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DesignAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
