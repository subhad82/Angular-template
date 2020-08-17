import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Model} from '../model';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Products : Model;
  constructor(private productService : ProductService , private CartService : CartService) { }
  cartList = this.CartService.items$;
  ngOnInit(): void {
    this.productService.getJSON().subscribe(data =>{
       
      this.Products = data as Model
      console.log(this.Products);
      console.log(data);
    })
  }
  addToCart(product) {
    this.CartService.addToCart(product);
  }
  deleteItem(product){
    this.CartService.deleteCart(product);
  }
}
