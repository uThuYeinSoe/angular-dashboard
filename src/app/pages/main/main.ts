import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header1 } from '../../components/header1/header1';
import { Header2 } from '../../components/header2/header2';
import { MainArea } from '../../components/main-area/main-area';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, Header1, Header2, Sidebar],
  standalone: true,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
