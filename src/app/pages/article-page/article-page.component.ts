import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  apiService: ApiService = inject(ApiService);

  articleId!: number;
  article$!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.article$ = this.apiService.getArticleById(this.articleId);
  }
}
