import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Model } from './model';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {
        let existingCartItems = JSON.parse(localStorage.getItem('products'));
        if (!existingCartItems) {
            existingCartItems = [];
        }
        this.itemsSubject.next(existingCartItems);
    }

    private itemsSubject = new BehaviorSubject<Model[]>([]);
    items$ = this.itemsSubject.asObservable();

    addToCart(product: Model) {
        this.items$.pipe(
            take(1),
            map((products) => {
                products.push(product);
                localStorage.setItem('products', JSON.stringify(products));
            }),
        ).subscribe();
    }

    deleteCart(product) {
        this.items$.pipe(
            take(1),
            map((products) => {

                products = products.splice(products.indexOf(product), 1);

                localStorage.setItem('products', JSON.stringify(products));
            }),
        ).subscribe();
    }

}
