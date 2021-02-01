import { Directionality } from '@angular/cdk/bidi';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { StepDirective } from '../directive/step.directive';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent extends CdkStepper implements OnInit, OnDestroy {
  @Input()
  hidden = false;
  @Input()
  activeClass: string;
  @Input()
  styleClass: string;
  @ViewChildren(StepDirective)
  contentSteps: QueryList<StepDirective>;
  constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
    super(dir, changeDetectorRef);
  }
  ngOnInit(): void {}

  isNextButtonHidden(): boolean {
    return !(this.steps.length === this.selectedIndex + 1);
  }

  stepSelected(i: number): void {
    this.selectedIndex = i;
    // this.steps.toArray()[i].stepControl.
    this.contentSteps.toArray()[i].element.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  ngOnDestroy(): void {
    this.contentSteps.forEach((step) => {
      step.isAlive$.next();
      step.isAlive$.complete();
    });
  }
}
