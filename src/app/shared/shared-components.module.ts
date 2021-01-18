import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {GithubInfoService} from './github-info.service';

import { LeftSidebarComponent } from '../components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../components/right-sidebar/right-sidebar.component';
import { RepoCardContainerComponent } from '../components/repo-card-container/repo-card-container.component';
import { SpinnerLoaderComponent } from '../components/spinner-loader/spinner-loader.component';


@NgModule({
  declarations: [
  	LeftSidebarComponent,
  	RepoCardContainerComponent,
  	RightSidebarComponent,
    SpinnerLoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
  	LeftSidebarComponent,
  	RepoCardContainerComponent,
  	RightSidebarComponent,
    SpinnerLoaderComponent,
  ],
  providers: [GithubInfoService]
})
export class SharedComponentsModule { }