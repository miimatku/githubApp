import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  constructor(private _http: Http) { }

  private _url = 'https://api.github.com/users/';

  /**
   *  Get user from github
   */
  getUser(user: string) {
      return this._http.get(this._url + user)
        .map(res => res.json())
        .do(data => console.log('All' + JSON.stringify(data)))
        .catch(this.handleError);
  }

 /**
 *  Get user's all public repositories 
 */
  getRepos(user: string) {
      return this._http.get(this._url + user + '/repos')
        .map(res => res.json())
        .do(data => console.log('All' +JSON.stringify(data)))
        .catch(this.handleError);
  }


  handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'server error');
  }

}
