import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../Model/Article';
import { RouterLink } from '@angular/router';
import { ArticleListService } from '../Service/article-list.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles: any[] = [];

  constructor(articleService: ArticleListService) {
    this.articles = articleService.articles;
  }
}
