// profile-modal.ts (KNOWN-GOOD for Boolean path)
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkConnectedOverlay,
  OverlayModule,
  CdkOverlayOrigin,
  ConnectedPosition,
} from '@angular/cdk/overlay';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [CommonModule, OverlayModule, CdkConnectedOverlay],
  templateUrl: './profile-modal.html',
  styleUrls: ['./profile-modal.scss'],
})
export class ProfileModal {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Input() origin!: CdkOverlayOrigin;

  @Input() title = 'Title';

  positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -8 },
  ];

  close() {
    if (!this.open) return;
    this.open = false;
    this.openChange.emit(false);
  }
}
