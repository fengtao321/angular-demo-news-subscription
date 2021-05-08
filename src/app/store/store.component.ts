import { Component, Input, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CartRepository } from '../model/cart.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public categories;
  public selectedCategory: string;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private productRepository: ProductRepository, private cartRepository: CartRepository) {  }

  get products(): Product[] {

    let pageIndex = (this.selectedPage - 1)*this.productsPerPage;
    let products =  this.productRepository.getProducts(this.selectedCategory);
    products = products.slice(pageIndex, pageIndex+this.productsPerPage);
    return products;
  }

  get pageCount(): number {
    let length= Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage);
    // return Array.from({length: length}, (_, i) => i + 1);
    return length;
  }

  ngOnInit(): void {
    this.categories = this.productRepository.getCategories();
  }

  changeCategory(cat?: string): void {
      this.selectedCategory = cat;
      this.selectedPage =  1;
  }

  changePageSize(num: string) {
      this.productsPerPage = parseInt(num);
      this.selectedPage = 1;
  }

  changePage(page:number) {
    this.selectedPage = page;
  }

  addProductToCart(product: Product) {
    this.cartRepository.updateLine(product);
  }
}
