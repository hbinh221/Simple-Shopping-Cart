import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.cartDetail();
    this.loadCart();
  }
    //
    getCardDetails:any=[];
    cartDetail(){
      if(localStorage.getItem('localCart')!=null){
        this.getCardDetails = JSON.parse(localStorage.getItem('localCart')!);
        console.log(this.getCardDetails)
      }
    }
    //Add item
      addPrd(getCartDetailID:any,getCartDetailQnt:any){
        for(let i=0; i<this.getCardDetails.length;i++){
          if(this.getCardDetails[i].id===getCartDetailID){
            if(getCartDetailQnt != 5 )
              this.getCardDetails[i].quantity = parseInt(getCartDetailQnt) +1;
          
        }
      }
      localStorage.setItem('localCart',JSON.stringify(this.getCardDetails))
      this.loadCart();
      
        
      }  
      //Minus item
      minusPrd(getCartDetailID:any,getCartDetailQnt:any){
        for(let i=0; i<this.getCardDetails.length;i++){
          if(this.getCardDetails[i].id===getCartDetailID){
            if(getCartDetailQnt >1 )
              console.log('hello')
              this.getCardDetails[i].quantity = parseInt(getCartDetailQnt) -1;
          
        }
        localStorage.setItem('localCart',JSON.stringify(this.getCardDetails));
        
        this.loadCart();

        }
        
      }   
      //Cal the total price
      total:number = 0;
      loadCart(){
        //check if any cart available
         if(localStorage.getItem('localCart')){
           this.getCardDetails = JSON.parse(localStorage.getItem('localCart')!)
           this.total = this.getCardDetails.reduce(function(acc:any,val:any){
              return acc +  (val.price * val.quantity);
           },0)
         }
      }
     
      removeProduct(productID:string):void{
        if(localStorage.getItem('localCart')){
          this.getCardDetails = JSON.parse(localStorage.getItem('localCart')!)
          for(var i =0; i<this.getCardDetails.length;i++){
            if(this.getCardDetails[i].id === productID){
              this.getCardDetails.splice(i,1);
              localStorage.setItem('localCart',JSON.stringify(this.getCardDetails));
              this.loadCart();
              this.getCartNumber();
            } 
          }

        }
      }
      removeAll(){
        localStorage.removeItem('localCart')
        this.getCardDetails = [];
        this.total = 0;
        this.cartNumber = 0;
        this.auth.cartSubject.next(this.cartNumber)

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

