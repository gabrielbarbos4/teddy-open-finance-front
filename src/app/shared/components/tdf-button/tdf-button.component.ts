import { Component, Input } from '@angular/core';

@Component({
  selector: 'tdf-button',
  standalone: true,
  templateUrl: './tdf-button.component.html',
})
export class TdfButtonComponent {
  @Input({ required: true }) text: string = "";
}
