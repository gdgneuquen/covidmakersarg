import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dialog-login-register',
  templateUrl: './dialog-login-register.component.html',
  styleUrls: ['./dialog-login-register.component.css']
})
export class DialogLoginRegisterComponent implements OnInit {

  constructor(
    public authServ: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authServ.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.authServ.signOut();
  }

}
