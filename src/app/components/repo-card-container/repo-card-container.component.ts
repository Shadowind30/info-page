import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IGithubRepo} from '../../github-info.model';
import { GithubInfoService } from '../../shared/github-info.service';

@Component({
  selector: 'app-repo-card-container',
  templateUrl: './repo-card-container.component.html',
  styleUrls: ['./repo-card-container.component.scss']
})
export class RepoCardContainerComponent implements OnInit {

  githubRepos: IGithubRepo[];
  isLoading: boolean = true;

  constructor(private githubInfo: GithubInfoService) {}
  
  ngOnInit(): void {
  	
    this.githubInfo.getRepos()
  	    .subscribe((data: IGithubRepo[]) => {
          this.githubRepos = [...data];
          this.isLoading = false;
        });
  }
}
