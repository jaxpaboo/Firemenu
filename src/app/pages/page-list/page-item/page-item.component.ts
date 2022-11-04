import { Component, OnInit, Input } from '@angular/core';

import { Page } from '../../page.model';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {
  @Input() page: Page;
  @Input() index: number;

  ngOnInit() {
  }
}
