import { Component, Input } from '@angular/core';
import { UserSummaryRow } from '../user-summary-row/user-summary-row';

@Component({
  selector: 'app-user-summary-card',
  imports: [UserSummaryRow],
  standalone: true,
  templateUrl: './user-summary-card.html',
  styleUrl: './user-summary-card.scss',
})
export class UserSummaryCard {
  @Input() containerTitle: string = '';

  @Input() firstContentValue1: string = '';
  @Input() secondContentValue1: string = '';
  @Input() countValue1: string = '';
  @Input() iconBgColor1: string = '';

  @Input() firstContentValue2: string = '';
  @Input() secondContentValue2: string = '';
  @Input() countValue2: string = '';
  @Input() iconBgColor2: string = '';

  @Input() firstContentValue3: string = '';
  @Input() secondContentValue3: string = '';
  @Input() countValue3: string = '';
  @Input() iconBgColor3: string = '';

  @Input() firstContentValue4: string = '';
  @Input() secondContentValue4: string = '';
  @Input() countValue4: string = '';
  @Input() iconBgColor4: string = '';
}
