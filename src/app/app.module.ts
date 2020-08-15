import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main/main.module';
import { TabsPageModule }  from './pages/tabs-page/tabs-page.module';
import { AppComponent } from './app.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';

@NgModule({
  declarations: [AppComponent, SpinnerLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    TabsPageModule
  ],
  exports: [
  SpinnerLoaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
