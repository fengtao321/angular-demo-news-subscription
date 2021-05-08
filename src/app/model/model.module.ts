import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { CartRepository } from "./cart.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource, CartRepository]
})
export class ModelModule { }