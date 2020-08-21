'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 15 / 100);
    }
}

let product = new Product('shirt', 200);

console.log(product);

product.make25PercentDiscount();

console.log(product);