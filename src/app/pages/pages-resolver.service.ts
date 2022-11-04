import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Page } from './page.model';
import { DataStorageService } from '../shared/data-storage.service';
import { PageService } from './page.service';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PagesResolverService implements Resolve<Page[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private pagesService: PageService,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const pages = this.pagesService.getPages();
    const user = this.authService.getUser();
    let userId = '';

    if (user.length > 0 && user[0].email != environment.masterEmail) {      
      userId = user[0].id
    }    

    if (pages.length === 0) {
      return this.dataStorageService.fetchPages(userId);
    } else {
      return pages;
    }
  }
}
