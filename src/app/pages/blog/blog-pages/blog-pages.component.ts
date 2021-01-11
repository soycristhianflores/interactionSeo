import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../../services/blog.service';
import { RootObject, Blog } from '../../../interface/blog';


@Component({
  selector: 'app-blog-pages',
  templateUrl: './blog-pages.component.html',
  styleUrls: ['./blog-pages.component.css']
})
export class BlogPagesComponent implements OnInit {

  blogs : Blog[] = [];
  public showMore;
  constructor(private blogService: BlogService) { }

  ngOnInit(){
    this.blogService.getBlog()
    .subscribe( resp => {
      this.blogs = resp.blogs;
      console.log(resp);
    })
  }

}
