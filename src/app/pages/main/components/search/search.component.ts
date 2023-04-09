import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'searcher',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  search = new FormControl('');
  searchSuscription: Subscription;

  @Output()
  notifyValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchSuscription = this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((data) => {
        this.emitData(data || '');
      });
  }

  ngOnDestroy(): void {
    this.unsuscriber();
  }

  unsuscriber() {
    if (this.searchSuscription) this.searchSuscription.unsubscribe();
  }

  emitData(value: string) {
    console.log(value);
    this.notifyValue.emit(value);
  }
}
