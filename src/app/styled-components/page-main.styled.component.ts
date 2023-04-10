import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-main',
  template: `<main>
    <ng-content/>
  </main>`,
  styleUrls: ['./page-main.scss'],
})
export class PageMain implements OnInit {
  constructor() {}

  ngOnInit() {}
}
