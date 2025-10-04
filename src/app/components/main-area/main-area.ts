import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-main-area',
  imports: [Dashboard],
  standalone: true,
  templateUrl: './main-area.html',
  styleUrl: './main-area.scss',
})
export class MainArea {}
