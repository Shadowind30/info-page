import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { IGithubRepo, IGithubUser} from '../github-info.model';

@Injectable({
  providedIn: 'root'
})

export class GithubInfoService {

	user: string = 'Shadowind30'

  constructor(private http: HttpClient) { }

  getUser(): Observable<IGithubUser> {
  	  return this.http.get<IGithubUser>(`https://api.github.com/users/${this.user}`);
  }

  getRepos(): Observable<IGithubRepo[]> {
  	  return this.http.get<IGithubRepo[]>(`https://api.github.com/users/${this.user}/repos`);
  }
}
