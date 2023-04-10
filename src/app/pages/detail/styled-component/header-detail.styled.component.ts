import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'detail-header',
  template: `<header>
    <ng-content></ng-content>
  </header>`,
  styleUrls: ['./header-detail.scss'],
})
export class HeaderDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
