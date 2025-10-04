import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-component',
  imports: [],
  standalone: true,
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss',
})
export class SearchComponent {
  @Input() type = 'search';
  @Input() placeholder = 'Searching...';
}
