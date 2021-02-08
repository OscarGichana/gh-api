import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {Repo} from '../shared/repo';
import {GithubService} from '../gh-http/gh-request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user: any= [];
  repos: any= [];
  username: string;

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
   searchUser() {
     this.githubService.getNewUser(this.username);
     this.githubService.getUser().subscribe(user => {
       this.user = user;
     });
     this.githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });

   }
}
