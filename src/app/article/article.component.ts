import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../app.component'

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  article: Article = {
    title: 'Titre de l\'article',
    author: 'John Doe',
    content: 'Voici le contenu de l\'article.',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: '',
    likes: 1000
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
