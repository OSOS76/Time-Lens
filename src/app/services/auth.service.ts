import { Injectable } from '@angular/core';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import {
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore';

import { auth, db } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  async signup(
    name:string,
    email:string,
    password:string,
    phone:string
  ) {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    const userData = {

      bookedVR:false,
      email:email,
      hasAcceess:true,
      headsetId:"headset_01",
      name:name,
      phone:phone,
      role:"user"

    };

    await setDoc(
      doc(db,'users',user.uid),
      userData
    );

    // حفظ البيانات بعد التسجيل مباشرة
    localStorage.setItem(
      'user',
      JSON.stringify(userData)
    );

    return userCredential;

  }

  async login(
    email:string,
    password:string
  ){

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    const uid =
      userCredential.user.uid;

    const userDoc =
      await getDoc(
        doc(db,'users',uid)
      );

    if(userDoc.exists()){

      localStorage.setItem(
        'user',
        JSON.stringify(userDoc.data())
      );

    }

    return userCredential;

  }

  async logout(){

    localStorage.removeItem('user');

    return signOut(auth);

  }

}
