import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  cartSubject = new Subject<any>()
  //special type of Observable that allows values to be multicasted to many Observers
}
