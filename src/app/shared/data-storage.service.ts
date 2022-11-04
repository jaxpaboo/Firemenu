import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Page } from '../pages/page.model';
import { PageService } from '../pages/page.service';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private pageService: PageService,
    private authService: AuthService
  ) {}

  // NOTE: userId = blank for ** environment.masterEmail **  (effectively these are default links for no logged in users)  

  storePages(userId) {
    const pages = this.pageService.getPages();        
    this.http
      .put(
        `https://${environment.firebaseDatabase}/pages${userId}.json`,        
        pages
      )      
      .subscribe(response => {
        console.log(response);
      })
      
  }

  fetchPages(userId) {    
    //
    return this.http
      .get<Page[]>(
        `https://${environment.firebaseDatabase}/pages${userId}.json`,        
      )
      .pipe(
        map(pages => {      
          return pages.map(page => {
            return {
              ...page              
            };
          });
        }),
        tap(pages => {
          this.pageService.setPages(pages);
        })
      );
  }
}
