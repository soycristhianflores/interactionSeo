import { Component, OnInit } from '@angular/core';
import { Blog} from '../../../../interface/blog';
import { BlogService } from '../../../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogvista3',
  templateUrl: './blogvista3.component.html',
  styleUrls: ['./blogvista3.component.css']
})
export class Blogvista3Component implements OnInit {
  
  blogs : Blog[] = [];
  idblog = '';

  constructor(private blogService: BlogService, private routerEnlace: ActivatedRoute,private metaTagService: Meta) { }

  ngOnInit(){
    this.idblog = this.routerEnlace.snapshot.paramMap.get("idblog");
    this.blogService.getBlogId(this.idblog).subscribe(
      resp => {
        this.blogs = resp.blogs;
        console.log(resp);
        
      }
    )

    
    // this.metaTagService.addTags([
    //   { name: 'author', content: 'prueba' },
    //   { name: 'robots', content: 'prueba' },
    //   { name: 'author', content: 'prueba' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
    //   { charset: 'UTF-8' }
    // ]);

    // console.log(this.blogs[0].imgEncabezado);

    // console.log('Hola');
  }



}
