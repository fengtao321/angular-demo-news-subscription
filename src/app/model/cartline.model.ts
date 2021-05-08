import { Product } from "./product.model";

export class Cartline {

    constructor(
        public product: Product,
        public quantity: number,
        ) {}

        get lineTotal() {
            return this.quantity * this.product.price;
        }
}