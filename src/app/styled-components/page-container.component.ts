import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-container',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="page-container"><ng-content /></div>
  `,
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainer {}
