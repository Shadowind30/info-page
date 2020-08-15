import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import {TabsPageComponent} from './pages/tabs-page/tabs-page.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { RepoCardContainerComponent } from './components/repo-card-container/repo-card-container.component';


const routes: Routes = [
	{path: '', redirectTo: '/main', pathMatch: 'full'},
	{path: 'main', component: MainComponent},
	{
		path: 'tabs',
		component: TabsPageComponent,
		children: [
			{path: 'about-me', component: LeftSidebarComponent},
			{path: 'skills', component: RightSidebarComponent},
			{path: 'repos', component: RepoCardContainerComponent},
			{path: '**', component: NotFoundComponent}
		]
},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

