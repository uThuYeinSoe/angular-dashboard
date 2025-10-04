import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-container',
  imports: [],
  templateUrl: './input-container.html',
  styleUrl: './input-container.scss',
})
export class InputContainer {
  @Input() label: string = '';
  @Input() type: string = '';
}
