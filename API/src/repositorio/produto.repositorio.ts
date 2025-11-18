import type { Product } from "../Entidades/modelo.produto.js";

export class ProductRepository {
  private products: Product[] = [];
  private idCounter = 1;

  create(product: Omit<Product, "id">): Product {
    const newProduct: Product = {
      id: this.idCounter++,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findByMinPrice(minPrice: number): Product[] {
    return this.products.filter(p => p.price > minPrice);
    }
}
