import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../interface/blog';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  blogs : Blog[] = [];
  loading : boolean;

  constructor(private blogService: BlogService) { 
    this.loading =  true;
  }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs(){
    this.blogService.getBlog().subscribe(resp =>{
      this.blogs = resp.blogs;
      if(this.blogs){
        this.loading = false;
      }
      console.log(resp)
    })
  }
}
