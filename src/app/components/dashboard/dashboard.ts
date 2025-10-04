import { Component } from '@angular/core';
import { DataCard } from '../../reUseableComponent/data-card/data-card';
import { SummaryCard } from '../../reUseableComponent/summary-card/summary-card';

@Component({
  selector: 'app-dashboard',
  imports: [DataCard, SummaryCard],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userIcon: string = 'fa-regular fa-user';
  moneyIcon: string = 'fa-solid fa-sack-dollar';
}
