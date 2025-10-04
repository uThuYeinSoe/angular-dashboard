import { Component } from '@angular/core';
import { SearchComponent } from '../../reUseableComponent/search-component/search-component';
import { UserTable } from '../../reUseableComponent/user-table/user-table';

@Component({
  selector: 'app-distributor-component',
  imports: [SearchComponent, UserTable],
  standalone: true,
  templateUrl: './distributor-component.html',
  styleUrl: './distributor-component.scss',
})
export class DistributorComponent {
  onSearch() {
    console.log('Searching...');
  }
}
