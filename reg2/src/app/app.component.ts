import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbdModalOptionsComponent} from './modal-options';
import {UserdataService} from './userdata.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // netImage: any = '';
  public signUpForm: FormGroup = null;
  public userData: any = null;

  constructor(private fb: FormBuilder, private modalWindow: NgbdModalOptionsComponent, private htppService: UserdataService) {
    this.signUpForm = fb.group({
      email: ['', [Validators.minLength(2), Validators.required]],
      lname: ['', [Validators.minLength(2), Validators.required]],
      name: ['', [Validators.minLength(2), Validators.required]],
      birthday: fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),
      phone: ['', [Validators.minLength(2), Validators.required]],
      city: ['', [Validators.minLength(2), Validators.required]],
      captcha: [null, Validators.required],
      sidekick: [null, Validators.requiredTrue]
    });
  }

  public submitForm(e: Event) {
    e.preventDefault();
    console.log(this.signUpForm);
    this.userData = this.signUpForm.value;
    // todo: send data to server
    this.htppService
      .post('http://localhost:4001/signup', this.userData)
      .map((res: any) => res.json())
      .subscribe(error => console.log(error));
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  openFModal() {
    this.modalWindow.open();
  }
}

