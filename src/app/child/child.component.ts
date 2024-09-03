import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent
  implements OnChanges {

  @Input()
  value: number = 0;


  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }

  ngOnChanges(changes: any): void {
    if (changes.value.currentValue % 5 == 0) {
      this.ref.detectChanges()
    }
  }



}
