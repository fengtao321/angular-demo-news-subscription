import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Cartline } from "./cartline.model";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    private lines: Cartline[] = [];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    getLines(): Observable<Cartline[]> {
        return from([this.lines]);
    }

    add(cartline: Cartline): void {
        this.lines.push(cartline);
    }

    update(index: number, quantity: number, incremental:boolean = false): void {
        incremental? this.lines[index].quantity += quantity : this.lines[index].quantity = quantity;
    }

    remove(index: number): void {
        this.lines.splice(index, 1);
    }

    clear(): void {
        this.lines = [];
    }

    find(product: Product):number {
        return this.lines.findIndex(line => line.product?.name === product?.name );
    }
}