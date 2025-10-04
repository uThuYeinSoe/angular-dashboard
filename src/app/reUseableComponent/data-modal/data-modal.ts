import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  PLATFORM_ID,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-modal',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './data-modal.html',
  styleUrl: './data-modal.scss',
})
export class DataModal implements OnChanges {
  @Input() open = false; // [(open)] support
  @Output() openChange = new EventEmitter<boolean>();

  @Input() title: string | null = null; // ✅ ←←← ADD THIS
  @Input() disableClose = false; // (optional) ESC/backdrop ပိတ်မလုပ်ချင်ပါက

  @ViewChild('dialog', { static: false }) dialogRef?: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT, { optional: true });
  private isBrowser = isPlatformBrowser(this.platformId);

  ngOnChanges(ch: SimpleChanges) {
    if (!ch['open']) return;

    // ✅ DOM ops only on browser
    if (this.isBrowser && this.doc?.body) {
      if (this.open) {
        this.doc.body.classList.add('no-scroll');
        // focus management (optional)
        queueMicrotask(() => {
          const root = (this as any).dialogRef?.nativeElement as HTMLElement | undefined;
          root?.focus?.();
        });
      } else {
        this.doc.body.classList.remove('no-scroll');
      }
    }

    // emit two-way binding as usual
    this.openChange.emit(this.open);
  }

  close() {
    this.open = false;
    this.openChange.emit(false);
    if (this.isBrowser && this.doc?.body) {
      this.doc.body.classList.remove('no-scroll');
    }
  }
  onBackdropClick(e: MouseEvent) {
    if (!this.disableClose && e.target === e.currentTarget) this.close();
  }
  onKeydown(e: KeyboardEvent) {
    if (!this.disableClose && e.key === 'Escape') this.close();
  }
}
