import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SubscribeCheckoutComponent } from './subscribe-checkout/subscribe-checkout.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"subscription",component:SubscriptionComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"subscribe-checkout",component:SubscribeCheckoutComponent},
  {path:"category-detail",component:CategoryDetailComponent},
  {path:"subscription-detai",component:SubscriptionDetailComponent},
  {path:"terms-condition",component:TermsConditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
