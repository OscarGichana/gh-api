import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../shared/user';
import 'rxjs/add/operator/map';
import {Repo} from '../shared/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  name: string;

  constructor(private _http: HttpClient) {
    this.name =  'OscarGichana';

  }
  getUser() {
    return this._http.get('https://api.github.com/users/' + this.name)
    .map(result => result);

  }
  getRepos() {
    return this._http.get(' https://api.github.com/users/' + this.name + '/repos')
    .map(result => result);
  }

  getNewUser(name: string) {    
    this.name = name;
  }
}