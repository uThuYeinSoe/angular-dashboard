import { Component } from '@angular/core';
import { SearchComponent } from '../../reUseableComponent/search-component/search-component';
import { UserTable } from '../../reUseableComponent/user-table/user-table';
import { ButtonComponent } from '../../reUseableComponent/button-component/button-component';

@Component({
  selector: 'app-distributor-component',
  imports: [SearchComponent, UserTable, ButtonComponent],
  standalone: true,
  templateUrl: './distributor-component.html',
  styleUrl: './distributor-component.scss',
})
export class DistributorComponent {
  onSearch() {
    console.log('Searching...');
  }

  createUserBtnLabel: string = 'Create Distributor';

  createUserAcition() {
    console.log('Hello Create User');
  }
}
