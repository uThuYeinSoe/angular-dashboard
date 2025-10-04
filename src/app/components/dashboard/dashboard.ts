import { Component, Input } from '@angular/core';
import { DataCard } from '../../reUseableComponent/data-card/data-card';
import { SummaryCard } from '../../reUseableComponent/summary-card/summary-card';
import { UserSummaryCard } from '../../reUseableComponent/user-summary-card/user-summary-card';

@Component({
  selector: 'app-dashboard',
  imports: [DataCard, SummaryCard, UserSummaryCard],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userIcon: string = 'fa-regular fa-user';
  moneyIcon: string = 'fa-solid fa-sack-dollar';

  containerTitleForToday = 'Today Summary';

  todayBetIconBgColor = '#6b3ea4';
  todayBetFirstValue = 'Today Bet';
  todayBetSecondValue = 'Total';
  todayCountValue = '10000';
  todayBetIconLink = 'fa-solid fa-dice-five';

  todayBetWinIconBgColor = '#21a544';
  todayBetWinFirstValue = 'Bet Win';
  todayBetWinSecondValue = 'Total';
  todayCountWinValue = '10000';
  todayBetWinIconLink = 'fa-solid fa-trophy';

  todayDepositIconBgColor = '#1ca2d5';
  todayDepositFirstValue = 'Deposit';
  todayDepositSecondValue = 'Total';
  todayDepositValue = '10000';
  todayDepositIconLink = 'fa-solid fa-piggy-bank';

  todayWithdrawIconBgColor = '#f66b4e';
  todayWithdrawFirstValue = 'Withdraw';
  todayWithdrawSecondValue = 'Total';
  todayWithdrawValue = '10000';
  todayWithdrawIconLink = 'fa-solid fa-hand-holding-dollar';

  containerTitleForMonth = 'Monthly Summary';

  monthlyBetIconBgColor = '#6b3ea4';
  monthlyBetFirstValue = 'Monthly Bet';
  monthlyBetSecondValue = 'Total';
  monthlyCountValue = '10000';
  monthlyBetIconLink = 'fa-solid fa-dice-five';

  monthlyBetWinIconBgColor = '#21a544';
  monthlyBetWinFirstValue = 'Bet Win';
  monthlyBetWinSecondValue = 'Total';
  monthlyCountWinValue = '10000';
  monthlyBetWinIconLink = 'fa-solid fa-trophy';

  monthlyDepositIconBgColor = '#1ca2d5';
  monthlyDepositFirstValue = 'Deposit';
  monthlyDepositSecondValue = 'Total';
  monthlyDepositValue = '10000';
  monthlyDepositIconLink = 'fa-solid fa-piggy-bank';

  monthlyWithdrawIconBgColor = '#f66b4e';
  monthlyWithdrawFirstValue = 'Withdraw';
  monthlyWithdrawSecondValue = 'Total';
  monthlyWithdrawValue = '10000';
  monthlyWithdrawIconLink = 'fa-solid fa-hand-holding-dollar';

  containerTitleForTopOwner = 'Top Unit Owner Agent';

  firstContentValue1ForTopOwner: string = 'Thu Yein Soe';
  secondContentValue1ForTopOwner: string = 'Id - 123456';
  countValue1ForTopOwner: string = '100000';
  iconBgColor1ForTopOwner: string = '#6b3ea4';

  firstContentValue2ForTopOwner: string = 'Htet Nanda Kyaw';
  secondContentValue2ForTopOwner: string = 'Id - 123456';
  countValue2ForTopOwner: string = '100000';
  iconBgColor2ForTopOwner: string = '#21a544';

  firstContentValue3ForTopOwner: string = 'Tin Tun Win';
  secondContentValue3ForTopOwner: string = 'Id - 123456';
  countValue3ForTopOwner: string = '100000';
  iconBgColor3ForTopOwner: string = '#1ca2d5';

  firstContentValue4ForTopOwner: string = 'Ar Yuu Maung';
  secondContentValue4ForTopOwner: string = 'Id - 123456';
  countValue4ForTopOwner: string = '100000';
  iconBgColor4ForTopOwner: string = '#f66b4e';
}
