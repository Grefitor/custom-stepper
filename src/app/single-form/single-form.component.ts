import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss'],
})
export class SingleFormComponent implements OnInit, OnDestroy {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};
  frmStepper: FormGroup;

  constructor(private fb: FormBuilder) {}

  get formArray(): AbstractControl {
    return this.frmStepper.get('steps');
  }
  ngOnInit(): void {
    this.frmStepper = this.fb.group({
      steps: this.fb.array([
        this.fb.group({
          firstName: ['First Name', Validators.compose([Validators.required])],
          lastName: ['Last Name', Validators.compose([Validators.required])],
          phone: [null], // optional
          email: [
            'johndoe@example.com',
            Validators.compose([Validators.email]),
          ],
        }),
        this.fb.group({
          addressOne: [null, Validators.compose([Validators.required])],
          addressTwo: [null], // optional
          city: [null, Validators.compose([Validators.required])],
          county: [null, Validators.compose([Validators.required])],
          country: [null, Validators.compose([Validators.required])],
        }),
        this.fb.group({
          creditCardNo: [
            '4111 1111 1111 1111',
            Validators.compose([Validators.required]),
          ],
          expiryDate: ['', Validators.compose([Validators.required])],
          cvvCode: ['', Validators.compose([Validators.required])],
        }),
      ]),
    });
  }

  submit(): void {
    console.log(this.frmStepper.value);
    this.frmValues = this.frmStepper.value;
  }

  ngOnDestroy(): void {
    console.log('Hey Destroyed');
  }
}
