export interface IGithubRepo {
	clone_url: string;
	name: string;
  stargazers_count: number;
  language: string;
}

export interface IGithubUser {
	avatar_url: string;
	bio: string;
	login: string;
	name: string;
}