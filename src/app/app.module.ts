import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DesignAppModule } from './design-app/design-app.module';


import { AppComponent } from './app.component';
import { TiTemplateComponent } from './ti-template/ti-template.component';
import { TemplatePropertyComponent } from './template-property/template-property.component';
import { TemplatePropertyService } from './template-property/template-property.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TiTemplateComponent,
    TemplatePropertyComponent
  ],
  imports: [
    BrowserModule,
    DesignAppModule,
    HttpClientModule
  ],
  providers: [TemplatePropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
