import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-modal.html',
  styleUrls: ['./data-modal.scss'],
})
export class DataModal {
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Input() title: string = '';

  close() {
    if (!this.open) return;
    this.open = false;
    this.openChange.emit(false);
  }

  onBackdropClick(evt: MouseEvent) {
    if (evt.target === evt.currentTarget) this.close();
  }
}
