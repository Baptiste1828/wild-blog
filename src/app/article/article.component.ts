import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../Model/Article';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() article!: Article;

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
