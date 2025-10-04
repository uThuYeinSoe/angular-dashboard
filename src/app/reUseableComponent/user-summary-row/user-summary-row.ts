import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-summary-row',
  imports: [NgClass],
  standalone: true,
  templateUrl: './user-summary-row.html',
  styleUrl: './user-summary-row.scss',
  host: { '[style.--selected-color1]': 'iconBgColor' },
})
export class UserSummaryRow {
  @Input() iconLink = 'fa-solid fa-user-tie';
  @Input() firstContentValue = '';
  @Input() secondContentValue = '';
  @Input() countValue = '';
  @Input() iconBgColor = 'var(--selected-color1)';
}
