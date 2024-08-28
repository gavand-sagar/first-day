import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TempComponent {



}
