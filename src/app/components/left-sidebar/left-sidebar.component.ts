import { Component, OnInit } from '@angular/core';

import { GithubInfoService } from '@app-shared/github-info.service';
import { IGithubUser } from '@app-shared/github-info.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})

export class LeftSidebarComponent implements OnInit {

  constructor(private githubInfo: GithubInfoService) { }

  canEdit: boolean = false;
  summary: string = localStorage.summary || '';
  user: IGithubUser;
  isLoading: boolean = true;
  isError: boolean = false;

  setCanEdit(){
  	this.canEdit = !this.canEdit;
  	if (!this.canEdit) {
  		this.saveSummary();
  	}
  }

  saveSummary(){
  	localStorage.setItem('summary', this.summary)
  }

  setError() {
    if (this.isLoading) {
      this.isError = true;
    }
  } 


 

  ngOnInit(): void {

  	this.githubInfo.getUser()
  			.subscribe( (data: IGithubUser) => {
  				this.user = data;
  				this.isLoading = false;
          this.isError = false;
  			})

    setTimeout(() =>  {
    this.setError();
  }, 10000);

  }

  

}
