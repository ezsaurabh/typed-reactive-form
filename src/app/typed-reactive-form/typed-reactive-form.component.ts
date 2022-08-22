import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormRecord } from '@angular/forms';
import { LoginForm } from './login.interface';

@Component({
  selector: 'app-typed-reactive-form',
  templateUrl: './typed-reactive-form.component.html',
  styleUrls: ['./typed-reactive-form.component.css']
})
export class TypedReactiveFormComponent implements OnInit {

  typedForm_methodOne: FormGroup;
  typedForm_methodTwo: FormGroup;
  typedForm_methodThree: FormRecord;

  constructor(private _formBuilder:FormBuilder) {

    /* Creating a form group with two form controls with typed and Validators */
    this.typedForm_methodOne = this._formBuilder.group({
      email: new FormControl<string | null>('initial value OR could be null',[Validators.required, Validators.email]),
      password:new FormControl<string | null>(null, {validators: [Validators.required, Validators.minLength(10)]})
    });

    /* Creating a form group with optional Controls and Dynamic Groups*/
    this.typedForm_methodTwo = this._formBuilder.group<LoginForm>({
      email: new FormControl('', {nonNullable: true}),
      password: new FormControl('', {nonNullable: true}),
    });

    // Though FormGroup keys are not known ahead of time. The FormRecord class is designed for that case
    this.typedForm_methodThree = new FormRecord<FormControl<string|null>>({});

    /* Creating a new FormRecord object and adding two controls to it. */
    this.typedForm_methodThree.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
    this.typedForm_methodThree.addControl('password', new FormControl('initial value OR could be null', [Validators.required, Validators.email]));
  }

  ngOnInit(): void {
  }

}
