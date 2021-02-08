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
}