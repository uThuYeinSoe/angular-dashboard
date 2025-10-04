import { Component, Input } from '@angular/core';
import { RowContainerInSummary } from '../row-container-in-summary/row-container-in-summary';

@Component({
  selector: 'app-summary-card',
  imports: [RowContainerInSummary],
  templateUrl: './summary-card.html',
  standalone: true,
  styleUrl: './summary-card.scss',
})
export class SummaryCard {
  @Input() containerTitle = '';

  @Input() todayBetIconLink: string = '';
  @Input() todayBetFirstValue: string = '';
  @Input() todayBetSecondValue: string = '';
  @Input() todayCountValue: string = '';
  @Input() todayBetIconBgColor: string = '';

  @Input() todayBetWinIconLink: string = '';
  @Input() todayBetWinFirstValue: string = '';
  @Input() todayBetWinSecondValue: string = '';
  @Input() todayCountWinValue: string = '';
  @Input() todayBetWinIconBgColor: string = '';

  @Input() todayDepositIconLink: string = '';
  @Input() todayDepositFirstValue: string = '';
  @Input() todayDepositSecondValue: string = '';
  @Input() todayDepositValue: string = '';
  @Input() todayDepositIconBgColor: string = '';

  @Input() todayWithdrawIconLink: string = '';
  @Input() todayWithdrawFirstValue: string = '';
  @Input() todayWithdrawSecondValue: string = '';
  @Input() todayWithdrawValue: string = '';
  @Input() todayWithdrawIconBgColor: string = '';
}
