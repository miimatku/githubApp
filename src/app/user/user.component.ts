import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'gitapp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = [];
  repos = [];
  searchUser: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  
  updateSearch() {
      // Get github user
      this._githubService.getUser(this.searchUser)
          .subscribe(users =>
              // console.log(users);
              this.user = users);


      // get users public repos
      this._githubService.getRepos(this.searchUser)
          .subscribe(repos => this.repos = repos);

  }

}
