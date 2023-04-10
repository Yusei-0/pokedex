import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'section-title',
  template: `<h3><ng-content/></h3>`,
  styleUrls: ['./section-title.scss'],
})
export class SectionTitle {}
