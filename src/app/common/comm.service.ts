import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJsonPlaceholderPost } from './json-placeholder-post.interface';
import { PostStoreService } from './post-store.service';

@Injectable({
  providedIn: 'root',
})
export class CommService {
  constructor(private http: HttpClient, private postStore: PostStoreService) {}

  getPosts(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (postsResponse: IJsonPlaceholderPost[]) => {
        this.postStore.posts.next(postsResponse);
      },
      error: (errorResponse) => {
        console.log('Error retrieving posts', errorResponse);
      },
    });
  }
}
