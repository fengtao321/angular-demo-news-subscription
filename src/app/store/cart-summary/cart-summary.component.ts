import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartRepository, Cart } from '../../model/cart.repository';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public cart: Cart = new Cart();

  constructor(private cartRepository: CartRepository) { }

   ngOnInit(): void {
     setTimeout(()=>this.subscription = 
     this.cartRepository.cartAnnounced$.subscribe(
      lines => this.cart = new Cart(lines)
      ),0 );
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
