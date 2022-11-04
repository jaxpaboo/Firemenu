import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { PageService } from '../page.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  id: number;
  editMode = false;
  pageForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.pageService.updatePage(this.id, this.pageForm.value);
    } else {
      this.pageService.addPage(this.pageForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  private initForm() {
    let pageName = '';
    let pageImagePath = '';
    let pageurl = '';

    if (this.editMode) {
      const page = this.pageService.getPage(this.id);
      pageName = page.name;
      pageImagePath = page.imagePath;
      pageurl = page.url;
    }

    this.pageForm = new FormGroup({
      name: new FormControl(pageName, Validators.required),
      imagePath: new FormControl(pageImagePath, Validators.required),
      url: new FormControl(pageurl, Validators.required),      
    });
  }
}
