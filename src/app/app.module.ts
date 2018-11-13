import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DesignAppModule } from './design-app/design-app.module';


import { AppComponent } from './app.component';
import { TiTemplateComponent } from './ti-template/ti-template.component';
import { TemplatePropertyComponent } from './template-property/template-property.component';


@NgModule({
  declarations: [
    AppComponent,
    TiTemplateComponent,
    TemplatePropertyComponent
  ],
  imports: [
    BrowserModule,
    DesignAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
