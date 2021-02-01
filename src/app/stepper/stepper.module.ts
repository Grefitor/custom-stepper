import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepDirective } from './directive/step.directive';
import { CdkStep } from '@angular/cdk/stepper';

@NgModule({
  declarations: [StepperComponent, StepComponent, StepDirective],
  imports: [CommonModule],
  providers: [{ provide: CdkStep, useClass: StepComponent }],
  exports: [StepperComponent, StepComponent, StepDirective],
})
export class StepperModule {}
