import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-area',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './main-area.html',
  styleUrl: './main-area.scss',
})
export class MainArea {}
