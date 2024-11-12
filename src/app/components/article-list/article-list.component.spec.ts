import { TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';

describe('ArticleListService', () => {
  let service: ArticleListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleListComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
