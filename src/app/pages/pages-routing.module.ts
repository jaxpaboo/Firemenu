import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth/auth.guard';
import { PageStartComponent } from './page-start/page-start.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PagesResolverService } from './pages-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PageStartComponent },
      { path: 'new', component: PageEditComponent },
      {
        path: ':id',
        component: PageDetailComponent,
        resolve: [PagesResolverService]
      },
      {
        path: ':id/edit',
        component: PageEditComponent,
        resolve: [PagesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
