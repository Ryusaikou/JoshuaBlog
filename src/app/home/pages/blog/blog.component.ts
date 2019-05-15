import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/models/blogModels';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  articles: Article;
  constructor() { }

  ngOnInit() {
    let x = new Article();
    x.title = 'New Fucking Article';
    x.body = 'Put some lorem Ipsum on dat body';
    x.author = 'Fuckin Me bieotch';
    x.publishDate = new Date();
    this.articles = x;
  }

  grabLatestArticle(){
    //Will call service for Latest Article
  }

  grabNextArticle(){
    //Will call for the Next Article from the service
  }

}
