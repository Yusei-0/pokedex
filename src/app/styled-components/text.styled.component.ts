import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'text',
  template: `<p><ng-content/></p>`,
  styleUrls: ['text.scss'],
})
export class Text {}
