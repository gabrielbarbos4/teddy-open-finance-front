import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TdfButtonComponent } from "../../shared/components/tdf-button/tdf-button.component";

@Component({
  standalone: true,
  templateUrl: './auth.component.html',
  imports: [
    TdfButtonComponent
  ],
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent { }
