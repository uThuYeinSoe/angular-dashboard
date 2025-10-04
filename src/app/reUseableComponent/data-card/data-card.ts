import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-data-card',
  imports: [NgClass],
  standalone: true,
  templateUrl: './data-card.html',
  styleUrl: './data-card.scss',
})
export class DataCard {
  @Input() showCardColor: string = 'var(--selected-color1)';
  @Input() cardPosition: string = '';
  @Input() totalVal: string = '';
  @Input() secondContent: string = '';
  @Input() icon: string = '';
}
