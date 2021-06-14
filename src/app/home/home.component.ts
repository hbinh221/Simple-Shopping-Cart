import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {AuthService} from '../_services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productArray:any = [];
  constructor(private productService:ProductService,private auth: AuthService) { }

  ngOnInit(): void {
    this.productService.getProduct()
      .subscribe(data => this.productArray = data);
  }
  addQut(productID:any){
    if(productID.quantity !=5)
    {
      
      productID.quantity++;
    }
 
  }
  minusQnt(productID:any){
    if(productID.quantity > 1)
    productID.quantity--;
    }
  itemsCart:any = [];
    
  addCart(category:any){
    
    let cartDataNull = localStorage.getItem('localCart');
    //both key and value need to be in string type
    //Save data in browser, maintain after reload
    if(cartDataNull == null){
      let storeDataGet:any=[];
      storeDataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
     
    }
    // if user already store a product
    else{
      var id = category.id;
      let index:number = -1;
      this.itemsCart =JSON.parse(localStorage.getItem('localCart')!);
      //convert string to object
      //check if item already in cart
     
      for(let i=0;i<this.itemsCart.length;i++){
        if(parseInt(id)===parseInt(this.itemsCart[i].id)){
          // update the quantity
          this.itemsCart[i].quantity = category.quantity;
          index = i;
          break;
        }
      }
      //If id not match
        if(index == -1){
          this.itemsCart.push(category);
          localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
        }
        else{
          localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
        }
      }
      this.getCartNumber();
    }
  cartNumber:number = 0;
  getCartNumber(){
    var cartValue =  JSON.parse(localStorage.getItem('localCart')!);
    console.log(cartValue)
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber)
    // send messages to an observable which are then sent to all angular components that are subscribers
  }
}
