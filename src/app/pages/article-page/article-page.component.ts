import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  http: HttpClient = inject(HttpClient);

  articleId!: number;
  article!: Article;
  articleSubscription!: Subscription;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.articleSubscription = this.getArticleById(this.articleId);
  }

  getArticleById(id: number) {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data => {
      this.article = data;
    });
  }

  ngDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
