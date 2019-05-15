import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  grabLatestArticle(){
    //Will call service for Latest Article
  }

  grabNextArticle(){
    //Will call for the Next Article from the service
  }

}
