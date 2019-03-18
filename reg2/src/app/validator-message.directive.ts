import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-message',
  template: `
    <div class="alert alert-danger" *ngIf="field.invalid && field.touched && validatorMessages">
      <li *ngFor="let errMsg of validatorMessages"> {{errMsg}}</li>
    </div>
  `
})
export class ValidatorMessageComponent {
  @Input() field: FormControl;

  public get validatorMessages() {
    const field = this.field;
    if (!field || !field.errors) {
      return false;
    }
    const errors = [];
    const config = {
      required: 'Field is required',
      requiredTrue: 'Value should be positive',
      email: 'Field should contain e-mail',
      pattern: 'Field does not match to pattern'
    };
    if (field.errors.hasOwnProperty('minlength')) {
      config['minlength'] = `Minimum length ${ field.errors.minlength.requiredLength}`;
    }
    if (field.errors.hasOwnProperty('maxlength')) {
      config['maxlength'] = `Maximum length ${ field.errors.maxlength.requiredLength}`;
    }

    Object.keys(field.errors).forEach((error: string) => {
      errors.push(config[error]);
    });

    return errors;
  }

}
