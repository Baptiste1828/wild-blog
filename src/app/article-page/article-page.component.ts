import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ArticleListService } from '../Service/article-list.service';
import { Article } from '../Model/Article';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleList: ArticleListService = inject(ArticleListService);
  articleId!: number;
  article!: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article = this.articleList.getById(this.articleId);
    });
  }
}
