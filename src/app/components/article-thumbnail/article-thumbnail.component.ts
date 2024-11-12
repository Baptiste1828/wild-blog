import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {

  @Input() article!: Article;

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
