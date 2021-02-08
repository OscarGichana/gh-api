import { Component } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {GithubService} from './gh-http/gh-request.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-api';
}
