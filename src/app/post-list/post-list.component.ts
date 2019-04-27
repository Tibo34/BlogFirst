import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  listPost:Post[]=[];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.listPost=this.postService.listPost;
  }

}
