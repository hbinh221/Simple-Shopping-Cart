import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.cartSubject.subscribe(data => this.cartItem = data)
    //catch the data = this.cartNumber
  }

  ngOnInit(): void {
    this.getCartItem();
  }
    cartItem:number = 0;
    getCartItem(){
      if(localStorage.getItem('localCart') != null){
        var cartCount = JSON.parse(localStorage.getItem('localCart')!);
        this.cartItem = cartCount.length;
      }
    }  

}
