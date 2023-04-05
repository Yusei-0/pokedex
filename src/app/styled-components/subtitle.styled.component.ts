import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'subtitle',
  template: `<h2><ng-content/></h2>`,
  styleUrls: ['subtitle.scss'],
})
export class NameComponent {}
