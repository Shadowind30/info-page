/// Not currently used 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageComponent } from './tabs-page.component';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { RepoCardContainerComponent } from '../../components/repo-card-container/repo-card-container.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';


const routes: Routes = [
	{path: '', redirectTo: '/tabs', pathMatch: 'full'},
	{path: 'tabs', component: TabsPageComponent},
	{path: 'about-me', component: LeftSidebarComponent},
	{path: 'repos', component: RepoCardContainerComponent},
	{path: 'skills', component: RightSidebarComponent},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
