import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Page } from './page.model';

@Injectable()
export class PageService {
  pagesChanged = new Subject<Page[]>();

  private pages: Page[] = [];  

  private defaultPages: Page[] = [
    new Page(
      'Google',
      'google.com',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png',
    ),
    
  ];

  resetDefaultPages() {
    this.pages = this.defaultPages.slice();
  }

  setPages(pages: Page[]) {
    this.pages = pages;
    this.pagesChanged.next(this.pages.slice());
  }

  getPages() {
    return this.pages.slice();
  }

  getPage(index: number) {
    return this.pages[index];
  }

  addPage(page: Page) {
    this.pages.push(page);
    this.pagesChanged.next(this.pages.slice());
  }

  updatePage(index: number, newPage: Page) {
    this.pages[index] = newPage;
    this.pagesChanged.next(this.pages.slice());
  }

  deletePage(index: number) {
    this.pages.splice(index, 1);
    this.pagesChanged.next(this.pages.slice());
  }
}
