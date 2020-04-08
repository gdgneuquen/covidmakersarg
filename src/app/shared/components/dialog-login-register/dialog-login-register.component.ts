import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-login-register',
  templateUrl: './dialog-login-register.component.html',
  styleUrls: ['./dialog-login-register.component.css']
})
export class DialogLoginRegisterComponent implements OnInit {

  loginForm: FormGroup;

  passType = 'password';

  constructor(
    public authServ: AngularFireAuth,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required
      ]),
      userPass: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  loginWithEmail() {
    console.log('CON EMAIL');
  }

  loginWithGoogle() {
    this.authServ.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.authServ.signOut();
  }
  showPassword() {
    if (this.passType === 'password') {
      this.passType = 'text';
    } else {
      this.passType = 'password';
    }
  }

}
