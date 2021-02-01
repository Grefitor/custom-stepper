import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Module
import { StepperModule } from './stepper/stepper.module';
import { SingleFormComponent } from './single-form/single-form.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SingleFormComponent,
    MultiFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
