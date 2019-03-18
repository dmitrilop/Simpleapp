import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidatorMessageComponent } from './validator-message.directive';
import { RecaptchaModule } from 'ng-recaptcha';
import {AppComponent} from './app.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {NgbdModalContentComponent, NgbdModalOptionsComponent} from './modal-options';
import { HttpClientModule } from '@angular/common/http';
import {UserdataService} from './userdata.service';
import {NgbdProgressbarLabelsComponent} from './progressbar-labels';


@NgModule({
  declarations: [
    AppComponent,
    NgbdModalOptionsComponent,
    ValidatorMessageComponent,
    NgbdModalContentComponent,
    NgbdProgressbarLabelsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    RecaptchaFormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [AppComponent, NgbdModalOptionsComponent, NgbActiveModal, UserdataService],
  bootstrap: [AppComponent, NgbdModalOptionsComponent, NgbdModalContentComponent],
  entryComponents: [NgbdModalContentComponent],
})
export class AppModule { }
