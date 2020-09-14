import { Component, OnInit } from '@angular/core';
import { CommService } from './common/comm.service';
import {
  IJsonPlaceholderBasic,
  IJsonPlaceholderPost,
} from './common/json-placeholder-post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: IJsonPlaceholderBasic[][] = [];
  showProperty: 'user' | 'post' = 'post';

  constructor(private commSvc: CommService) {}

  ngOnInit(): void {
    this.commSvc.getPosts().subscribe({
      next: (postsResponse: IJsonPlaceholderPost[]) => {
        for (let i = 0; i < postsResponse.length; i += 10) {
          this.posts = [
            ...this.posts,
            postsResponse
              .slice(i, i + 10)
              .map((post) => ({ userId: post.userId, id: post.id })),
          ];
        }
      },
      error: (err) => {
        console.log('Error retrieving posts', err);
      },
    });
  }
}
