import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-main-area',
  imports: [RouterOutlet, Dashboard],
  standalone: true,
  templateUrl: './main-area.html',
  styleUrl: './main-area.scss',
})
export class MainArea {}
