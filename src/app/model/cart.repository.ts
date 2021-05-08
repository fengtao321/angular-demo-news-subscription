import { Injectable, OnInit } from "@angular/core";
import { Cartline } from "./cartline.model";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class CartRepository {
    public cartAnnounced$: Observable<Cartline[]>;

    constructor(private dataSource: StaticDataSource) {
        this.cartAnnounced$ = this.dataSource.getLines();
    }

    updateLine(product: Product, quantity: number = 1): void {
        let index = this.dataSource.find(product);
        index < 0 ? this.dataSource.add(new Cartline(product, quantity)):
        this.dataSource.update(index, quantity, true);
    }

    removeLine(product: Product): void {
        let index = this.dataSource.find(product);
        if(index > -1) {
            this.dataSource.remove(index);
        }
    }
    
    clear(): void {
        this.dataSource.clear();
    }
}


export class Cart {
    
    constructor(
        public lines: Cartline[] = []
    ){}

        get itemCount(): number {
            return this.lines.length;
        }

        get cartPrice(): number {
            return this.lines.reduce((acc, cur)=> acc+cur.lineTotal, 0 );
        }

        public toString() {
            return 'cart is ' + this.itemCount + ' ' + this.cartPrice;
        }
}