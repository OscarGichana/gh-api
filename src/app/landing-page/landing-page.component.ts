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
  }
  ngOnInit() {
  }
}
