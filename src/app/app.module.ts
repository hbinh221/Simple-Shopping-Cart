import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SubscribeCheckoutComponent } from './subscribe-checkout/subscribe-checkout.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import {ProductService} from './product.service'
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    SubscriptionComponent,
    ContactComponent,
    CheckoutComponent,
    SubscribeCheckoutComponent,
    CategoryDetailComponent,
    SubscriptionDetailComponent,
    TermsConditionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
