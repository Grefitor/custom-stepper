import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StepComponent } from '../step/step.component';
@Directive({
  selector: '[appStep]',
})
export class StepDirective implements AfterViewInit {
  @Input()
  index: number;
  @Output()
  stepSelected = new EventEmitter<number>();
  /*  @HostBinding('attr.tabindex')
  tabIndex = '1'; */
  public isAlive$ = new Subject<boolean>();
  constructor(public element: ElementRef<HTMLLIElement>) {}

  ngAfterViewInit(): void {
    fromEvent(this.element.nativeElement, 'focusin')
      .pipe(takeUntil(this.isAlive$))
      .subscribe(
        () => {
          this.stepSelected.emit(this.index);
        },
        () => {},
        () => {
          console.log('I am done');
        }
      );
  }
}
