import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IGithubRepo} from '@app-shared/github-info.model';
import { GithubInfoService } from '@app-shared/github-info.service';

@Component({
  selector: 'app-repo-card-container',
  templateUrl: './repo-card-container.component.html',
  styleUrls: ['./repo-card-container.component.scss']
})
export class RepoCardContainerComponent implements OnInit {

  githubRepos: IGithubRepo[];
  isLoading: boolean = true;
  isError: boolean = false;

    setError() {
    if (this.isLoading) {
      this.isError = true;
    }
  }

  constructor(private githubInfo: GithubInfoService) {}
  
  ngOnInit(): void {
  	
    this.githubInfo.getRepos()
  	    .subscribe((data: IGithubRepo[]) => {
          this.githubRepos = [...data];
          this.isLoading = false;
          this.isError = false;
        });

    setTimeout(() =>  {
      this.setError();
    }, 10000);
  }
}
