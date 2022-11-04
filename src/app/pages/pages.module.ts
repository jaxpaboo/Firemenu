import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageItemComponent } from './page-list/page-item/page-item.component';
import { PageStartComponent } from './page-start/page-start.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [
    PagesComponent,
    PageListComponent,
    PageDetailComponent,
    PageItemComponent,
    PageStartComponent,
    PageEditComponent    
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class PagesModule {}
