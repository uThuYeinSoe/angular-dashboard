import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-component',
  imports: [NgClass, CommonModule],
  standalone: true,
  templateUrl: './button-component.html',
  styleUrls: ['./button-component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() btnName: string = 'Click Here';
  @Input() action?: () => void;
  @Input() type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' = 'primary';

  onClick(): void {
    console.log('[ButtonComponent] onClick fired');
    this.action?.();
  }
}
