import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

import { SessionService } from '../../services/session.service';
import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoriesService]
})
export class StoriesComponent implements OnInit {
  user; 
  stories =[];

  constructor(
    private session : SessionService,
    private storiesService : StoriesService,
  ) {}

  ngOnInit() {
    this.user = this.session.user;
    console.log("User we get from the session : ", this.user);

    this.storiesService.getStories()
    .subscribe((listOfStories) => {
        this.stories = listOfStories;
          console.log("the list of stories i got: ", listOfStories);
    });
  }

}
