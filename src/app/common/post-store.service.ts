import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IJsonPlaceholderPost } from './json-placeholder-post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostStoreService {
  /**
   * Store; To maintain consistency of downloaded data, IJsonPlaceholderPost is used instead of
   * IJsonPlaceholderBasic, used in displaying the data in app.component
   */
  posts: BehaviorSubject<IJsonPlaceholderPost[]> = new BehaviorSubject([]);

  constructor() {}
}
