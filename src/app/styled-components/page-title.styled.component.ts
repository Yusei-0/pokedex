import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-title',
  template: `<h1><ng-content/></h1>`,
  styleUrls: ['page-title.scss'],
})
export class PageTitle {}
