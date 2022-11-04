import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Page } from '../page.model';
import { PageService } from '../page.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit, OnDestroy {
  pages: Page[];
  subscription: Subscription;
  isAuthenticated = false;
  userId = '';
  private userSub: Subscription;

  constructor(private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ){}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;      
      if (user ) {
        this.userId = user.email===environment.masterEmail ? "" : user.id
      }
    });

    this.subscription = this.pageService.pagesChanged
      .subscribe(
        (pages: Page[]) => {
          this.pages = pages;
          this.onSaveData();
        }
      );

    this.pages = this.pageService.getPages();
  }

  onSaveData() {
    this.dataStorageService.storePages(this.userId);
  }

  onNewPage() {
    this.router.navigate(['new'], {relativeTo: this.route});    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
