import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared/shared-components.module';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { TabsPageComponent } from './tabs-page.component';


@NgModule({
  declarations: [TabsPageComponent],
  imports: [
    CommonModule,
    TabsPageRoutingModule,
    SharedComponentsModule
  ]
})
export class TabsPageModule { }
