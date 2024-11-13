import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;

  apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleLike(article: Article): void {
    article.isLiked = !article.isLiked;
  }
}
