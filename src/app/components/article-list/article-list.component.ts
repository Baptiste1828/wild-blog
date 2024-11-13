import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;

  http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles`);
  }
}
