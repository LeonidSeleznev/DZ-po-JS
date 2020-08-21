function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 15 / 100)
}

let product = new Product('shirt', 200);

console.log(product);

product.make25PercentDiscount();

console.log(product);