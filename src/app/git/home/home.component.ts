import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataGitService } from '../data-git.service';
import { User } from '../models/user.model';
import { catchError, filter, switchMap, debounceTime } from 'rxjs/operators';
import { empty, EMPTY } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: DataGitService) { }
  findControl = new FormControl();
  error: boolean = false;
  user: User = null;
  ngOnInit() {
    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
      debounceTime(1000),
      switchMap(value =>
        this.githubService.getUser(value).pipe(
          catchError(err => {
            this.user = null;
            this.error = true;
            return EMPTY;
          })))
      ).subscribe(user => {
        this.user = user;
        this.error = false;
      });
  }

}
