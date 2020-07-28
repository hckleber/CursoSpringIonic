import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
  
      this.formGroup = formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
      });
  
    }

  signupUser(){

  }
}
