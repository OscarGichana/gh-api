import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from '../shared/user';
import {Repo} from '../shared/repo';

@Injectable({
  providedIn: 'root'
})
export class GhService {



  constructor() { }
}
