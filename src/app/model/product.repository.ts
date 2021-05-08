import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { StaticDataSource } from "./static.datasource";

@Injectable({
    providedIn: 'root',
  })
export class ProductRepository {
    private products : Product[];

    constructor(private dataSource: StaticDataSource) {
        this.dataSource.getProducts().subscribe(data => {
            this.products = data;
        });
    }
    getProducts(category:string = null): Product[] {
        return category? this.products.filter(p =>  p.category===category ) 
        : this.products;
    }

    getProduct(id:number): Product | void {
        this.products.find(product => product.id===id);
    }

    getCategories():string[] {
        let categories: Set<string> = new Set();
        this.products.forEach(product => {
            if(product.category) {
                categories.add(product.category);
            }
        });

        return Array.from(categories).sort();
    }
}