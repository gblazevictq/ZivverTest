import { Component, Input, OnInit } from '@angular/core';
import { IJsonPlaceholderPost } from '../common/json-placeholder-post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: IJsonPlaceholderPost;
  @Input() itemShown: 'post' | 'user';

  constructor() {}

  ngOnInit(): void {}
}
