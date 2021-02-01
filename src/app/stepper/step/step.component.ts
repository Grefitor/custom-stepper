import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CdkStep, useExisting: StepComponent }],
})
export class StepComponent extends CdkStep {
  constructor(public stepper: CdkStepper) {
    super(stepper);
  }
}
