import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-only',
  imports: [],
  standalone: true,
  templateUrl: './input-only.html',
  styleUrl: './input-only.scss',
})
export class InputOnly {
  @Input() inputType: string = '';
  @Input() inputValue: string = '';
  @Input() inputPlaceHolder: string = '';
}
