import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { TabsPageComponent } from './tabs-page.component';


@NgModule({
  declarations: [TabsPageComponent],
  imports: [
    CommonModule,
    TabsPageRoutingModule,
    MaterialModule
  ]
})
export class TabsPageModule { }
