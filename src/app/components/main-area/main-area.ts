import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Dashboard } from '../dashboard/dashboard';
import { DistributorComponent } from '../distributor-component/distributor-component';

@Component({
  selector: 'app-main-area',
  imports: [RouterOutlet, Dashboard, DistributorComponent],
  standalone: true,
  templateUrl: './main-area.html',
  styleUrl: './main-area.scss',
})
export class MainArea {}
