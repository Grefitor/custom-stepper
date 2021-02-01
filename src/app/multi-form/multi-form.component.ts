import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss'],
})
export class MultiFormComponent implements OnInit {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;
  frmDetails: FormGroup;
  frmAddress: FormGroup;
  frmPayment: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmDetails = this.fb.group({
      firstName: ['First Name', Validators.compose([Validators.required])],
      lastName: ['Last Name', Validators.compose([Validators.required])],
      phone: [null], // optional
      email: [
        'johndoe@example.com',
        Validators.compose([Validators.required, Validators.email]),
      ],
    });

    this.frmAddress = this.fb.group({
      addressOne: [null, Validators.compose([Validators.required])],
      addressTwo: [null], // optional
      city: [null, Validators.compose([Validators.required])],
      county: [null, Validators.compose([Validators.required])],
      country: [null, Validators.compose([Validators.required])],
    });

    this.frmPayment = this.fb.group({
      creditCardNo: [
        '4111 1111 1111 1111',
        Validators.compose([Validators.required]),
      ],
      expiryDate: ['', Validators.compose([Validators.required])],
      cvvCode: ['', Validators.compose([Validators.required])],
    });
  }

  frmSubmit(frm: FormGroup): void {
    console.log(frm);
  }
}
