import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main/main.module';
import { TabsPageModule }  from './pages/tabs-page/tabs-page.module';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    TabsPageModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
